<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class VendorController extends Controller
{
    public function VendorLogin(){
        return Inertia::render('DashboardPage');
    }

    public function VendorDashboard(){
        return Inertia::render('DashboardPage');
    }

    public function VendorProfile(){
        return Inertia::render('ProfilePage');
    }

    public function VendorMenu(){
        return Inertia::render('MenuPage');
    }
}
