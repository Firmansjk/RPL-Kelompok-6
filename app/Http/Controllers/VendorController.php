<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class VendorController extends Controller
{
    public function VendorDashboard(){
        return Inertia::render('DashboardPage');
    }

    public function VendorProfile(){
        return Inertia::render('ProfilePage');
    }

    public function VendorProfil(){
        return Inertia::render('Profil');
    }

    public function VendorMenu(){
        return Inertia::render('MenuPage');
    }

    public function VendorDestroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
