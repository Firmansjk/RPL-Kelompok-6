<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class VendorController extends Controller
{
    public function VendorDashboard(){
        return Inertia::render('toko/dashboard');
    }
}
