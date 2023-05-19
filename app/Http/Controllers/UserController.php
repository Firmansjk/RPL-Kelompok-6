<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Packet;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    public function index()
    {
        // Mengambil data user yang memiliki role "vendor"
        $users = User::where('role', 'vendor')->get();
        $packets = Packet::with('user')->get();
        $packets = Packet::with('user')->get();
        // $packets = User::where('role', 'vendor')->get();

        return Inertia::render('UserPage/HomePage', compact('users', 'packets'));
    }

    public function SearchCatering(){
        return Inertia::render('UserPage/SearchCatering');
    }

    public function UserLogin()
    {
        return Inertia::render('UserPage/LoginPageUser');
    }

    public function UserRegisterPage()
    {
        return Inertia::render('UserPage/RegisterPage');
    }
    public function UserProfile(){

        $user = Auth::user();

        return Inertia::render('UserPage/SettingProfile', compact('user'));
    }

    public function UserUpdate(Request $request)
    {

        $user = Auth::user();
        
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->vendor_info = $request->vendor_info;
        $user->photo = $request->photo;

      
        $user->save();
        
        return redirect()->back()->with('success', 'Profile updated successfully!');
    }

    public function UserProfilePicture(Request $request)
    {  
        $id = Auth::user()->id;
        $data = User::find($id);

        if ($request->file('photo')) {
            $file = $request->file('photo');
            @unlink(public_path('upload/user_profile/'.$data->photo));
            $filename = time().$file->getClientOriginalName();
            $file->move(public_path('upload/user_profile'), $filename);
            $data['photo'] = $filename;
        }
    
        $data->save();
        return redirect()->back();
    }

    public function UserDestroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
