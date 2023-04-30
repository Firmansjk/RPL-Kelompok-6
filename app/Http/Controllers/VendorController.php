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

        $id = Auth::user()->id;
        $vendorData = User::find($id);

        return Inertia::render('ProfilePage', compact('vendorData'));
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
