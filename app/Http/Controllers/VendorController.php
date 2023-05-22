<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Storage;
use App\Models\Packet;
use App\Models\Product;
use Image;

class VendorController extends Controller
{
    public function VendorDashboard(){
        return Inertia::render('DashboardPage');
    }

    public function VendorProfile(){

        // $id = Auth::user()->id;
        // $vendorData = User::find($id);
        // $vendorData = Auth::user();
        $user = Auth::user();

        return Inertia::render('ProfilePage', compact('user'));
    }

    public function VendorMenu(Request $request)
    {
        $user = Auth::user();
        $searchQuery = $request->query('query'); // Mengambil query pencarian dari permintaan

        $packets = Packet::where('packet_name', 'like', "%$searchQuery%")
                        ->orWhere('packet_desc', 'like', "%$searchQuery%")
            ->get();

        $products = Product::where('product_name', 'like', "%{$searchQuery}%")
            ->get();
        
        return Inertia::render('MenuPage', compact('user', 'packets', 'products', 'searchQuery'));
    }

    
    public function VendorUpdate(Request $request)
    {

        $user = Auth::user();
        
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->vendor_info = $request->vendor_info;

      
        $user->save();
        
        return redirect()->back()->with('success', 'Profile updated successfully!');
    }

    public function VendorProfilePicture(Request $request)
    {  
        $id = Auth::user()->id;
        $data = User::find($id);

        if ($request->file('photo')) {
            $file = $request->file('photo');
            @unlink(public_path('upload/vendor_profile/'.$data->photo));
            $filename = time().$file->getClientOriginalName();
            $file->move(public_path('upload/vendor_profile'), $filename);
            $data['photo'] = $filename;
        }
    
        $data->save();
        return redirect()->back();
    }

    public function VendorSampulPicture(Request $request)
    {  
        $id = Auth::user()->id;
        $data = User::find($id);

        if ($request->file('sampul')) {
            $file = $request->file('sampul');
            @unlink(public_path('upload/vendor_sampul/'.$data->photo));
            $filename = time().$file->getClientOriginalName();
            $file->move(public_path('upload/vendor_sampul'), $filename);
            $data['sampul'] = $filename;
        }
    
        $data->save();
        return redirect()->back();
    }

    public function VendorDeleteProfile(Request $request)
    {
        $id = Auth::user()->id;
        $data = User::find($id);

        if ($data->photo) {
            // Hapus foto dari direktori upload
            $file_path = public_path('upload/vendor_profile/' . $data->photo);
            if (file_exists($file_path)) {
                unlink($file_path);
            }

            // Hapus nama foto dari kolom photo di database
            $data->photo = null;
            $data->save();
        }
        return redirect()->back();
    }

    // public function searchVendor(Request $request)
    // {
    //     $query = $request->input('query');

    //     $results = VendorMenu::where('name', 'like', '%' . $query . '%')
    //         ->orWhere('description', 'like', '%' . $query . '%')
    //         ->get();

    //     return response()->json($results);
    // }

    public function VendorLogin()
    {
        return Inertia::render('LoginPage');
    }

    public function VendorRegisterPage()
    {
        return Inertia::render('RegisterPage');
    }

    public function VendorUpdatePassword(Request $request): RedirectResponse
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

    public function VendorRegister(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'vendor',
        ]);

        $notification = [
            'message' => 'Vendor Registered Successfully',
            'alert-type' => 'success'
        ];

        return Inertia::render('LoginPage')->with('notification', $notification);
    }

    

    public function VendorDestroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/vendor/login');
    }

}
