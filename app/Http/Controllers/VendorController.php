<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

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

    
    public function VendorUpdate(Request $request)
    {
        $user = Auth::user();
        
        // $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        // $user->phone_number = $request->phone_number;
        $user->address = $request->address;
        // $user->description = $request->description;

        // if ($request->file('photo')) {
        //     $file = $request->file('photo');
        //     $filename = date('Ymdhi').$file->getClientOriginalName();
        //     $file->move(public_path('images'),$filename);
        // }

        if ($request->hasFile('profile_photo')) {
            $path = $request->file('images')->store('public/images');
            $user->profile_photo_path = Storage::url($path);
        }


        $user->save();
        
        return redirect()->back()->with('success', 'Profile updated successfully!');
    }


    public function VendorProfil(){
        return Inertia::render('Profil');
    }

    public function VendorMenu(){
        return Inertia::render('MenuPage');
    }

    public function VendorLogin(){
        return Inertia::render('loginpage');
    }

    public function VendorDestroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
