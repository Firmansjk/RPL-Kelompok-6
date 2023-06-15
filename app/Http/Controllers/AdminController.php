<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;
use Intervention\Image\Facades\Image;


class AdminController extends Controller
{
    public function AdminDashboard(){
        return Inertia::render('DashboardAdmin');
    }

    public function AdminLogin()
    {
        if (Auth::check()) {
            // Pengguna belum masuk, arahkan kembali
            return redirect()->back();
        }
            // Jika tidak ada akun yang sedang login
            // Redirect ke halaman tujuan
            return Inertia::render('AdminPage/LoginPage');

    }

    public function AdminProfile(){

        // $id = Auth::user()->id;
        // $vendorData = User::find($id);
        // $vendorData = Auth::user();
        $user = Auth::user();

        return Inertia::render('AdminPage/ProfilePage', compact('user'));
    }

    public function ListUser(Request $request)
    {
        $user = Auth::user();
        $searchQuery = $request->query('query'); // Mengambil query pencarian dari permintaan

        $users = User::where(function($query) use ($searchQuery) {
            $query->where('name', 'like', "%$searchQuery%")
                  ->orWhere('email', 'like', "%$searchQuery%");
        })
        ->where('role', 'user')
        ->latest()
        ->get();

        return Inertia::render('AdminPage/ListUserPage', compact('user', 'users', 'searchQuery'));
    }

    public function ListVendor(Request $request)
    {
        $user = Auth::user();
        $searchQuery = $request->query('query'); // Mengambil query pencarian dari permintaan

        $users = User::where(function($query) use ($searchQuery) {
            $query->where('name', 'like', "%$searchQuery%")
                  ->orWhere('email', 'like', "%$searchQuery%");
        })
        ->where('role', 'vendor')
        ->latest()
        ->get();

        return Inertia::render('AdminPage/ListVendorPage', compact('user', 'users', 'searchQuery'));
    }

    public function EditUser($id){
        $user = Auth::user();
        $users = User::findOrFail($id);
        return Inertia::render('AdminPage/EditUserPage', compact('users', 'user'));
    }// End Method

    public function EditVendor($id){
        $user = Auth::user();
        $users = User::findOrFail($id);
        return Inertia::render('AdminPage/EditVendorPage', compact('users', 'user'));
    }// End Method

    public function UpdateVendor(Request $request){
        $user_id = $request->id;
        $user = User::findOrFail($user_id);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = time().$file->getClientOriginalName();
            $file->move(public_path('upload/vendor_profile'), $filename);

            // Menghapus foto lama jika ada
            if (!empty($user->photo)) {
                @unlink(public_path('upload/admin_profile/'.$user->photo));
            }

            $user->photo = $filename;
        }

        $user->save();

        return Redirect::route('admin.listvendor');

    }// End Method

    public function UpdateUser(Request $request){
        $user_id = $request->id;
        $user = User::findOrFail($user_id);

        $user->update([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'address' => $request->address,
            'phone' => $request->phone,
        ]);

        return Redirect::route('admin.listuser');

    }// End Method

    public function UserDelete($id){

        $user = User::findOrFail($id);

        // Menghapus foto profil jika ada
        if (!empty($user->photo)) {
            @unlink(public_path('upload/user_profile/'.$user->photo));
        }

        $user->delete();

        $notification = array(
            'message' => 'User deleted successfully',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);

    }// End Method

    public function VendorDelete($id){

        $user = User::findOrFail($id);

        // Menghapus foto profil jika ada
        if (!empty($user->photo)) {
            @unlink(public_path('upload/vendor_profile/'.$user->photo));
        }

        // Menghapus foto profil jika ada
        if (!empty($user->sampul)) {
            @unlink(public_path('upload/vendor_sampul/'.$user->photo));
        }

        $user->delete();

        $notification = array(
            'message' => 'User deleted successfully',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);

    }// End Method

    public function AdminUpdate(Request $request)
    {

        $user = Auth::user();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;

        $user->save();

        return redirect()->back()->with('success', 'Profile updated successfully!');
    }

    public function AdminProfilePicture(Request $request)
    {
        $id = Auth::user()->id;
        $data = User::find($id);

        if ($request->file('photo')) {
            $file = $request->file('photo');
            @unlink(public_path('upload/admin_profile/'.$data->photo));
            $filename = time().$file->getClientOriginalName();
            $file->move(public_path('upload/admin_profile'), $filename);
            $data['photo'] = $filename;
        }

        $data->save();
        return redirect()->back();
    }

    public function AdminDeleteProfile(Request $request)
    {
        $id = Auth::user()->id;
        $data = User::find($id);

        if ($data->photo) {
            // Hapus foto dari direktori upload
            $file_path = public_path('upload/admin_profile/' . $data->photo);
            if (file_exists($file_path)) {
                unlink($file_path);
            }

            // Hapus nama foto dari kolom photo di database
            $data->photo = null;
            $data->save();
        }
        return redirect()->back();
    }

    public function VendorUpdatePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ]);

        if (!Hash::check($request->old_password, auth::user()->password)) {
            return back()->with("error", "Old Password Doesn't Match");
        }

        User::whereId(Auth()->user()->id)->update([
            'password' => Hash::make($request->new_password)
        ]);

        return back()->with("status", "Password Changed Succesfully");
    }

    public function AdminDestroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/admin/login');
    }
}
