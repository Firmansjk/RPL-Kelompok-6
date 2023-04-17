<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\Auth\LoginController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        // 'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/dashboardpage', function () {
//     return Inertia::render('DashboardPage');
// })->name('dashboardpage');

// Route::get('/profilepage', function () {
//     return Inertia::render('ProfilePage');
// })->name('profilepage');

// Route::get('/menupage', function () {
//     return Inertia::render('MenuPage');
// })->name('menupage');

// Route::get('/loginpage', function () {
//     return Inertia::render('LoginPage');
// })->name('loginpage');

Route::get('/registerpage', function () {
    return Inertia::render('RegisterPage');
})->name('registerpage');

Route::middleware(['auth','role:admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'AdminDashboard'])->name('admin.dashboard');
});


/// Vendor Dashboard
route::middleware(['auth','role:vendor'])->group(function() {
    Route::get('/vendor/dashboardpage', [VendorController::class, 'VendorLogin'])->name('vendor.dashboard');
});

route::middleware(['auth','role:vendor'])->group(function() {
    Route::get('/vendor/profilepage', [VendorController::class, 'VendorProfile'])->name('vendor.profilepage');
});

route::middleware(['auth','role:vendor'])->group(function() {
    Route::get('/vendor/menupage', [VendorController::class, 'VendorMenu'])->name('vendor.menupage');
});

// route::middleware(['auth','role:vendor'])->group(function() {
//     Route::get('/dashboardpage', [VendorController::class, 'VendorDashboard'])->name('vendor.menupage');
// });

// route::middleware(['auth','role:vendor'])->group(function() {
//     Route::get('/vendor/dashboard', [VendorController::class, 'VendorDashboard']);
// });

//route index login
Route::get('/loginpage', [LoginController::class, 'index']);

//route store login
Route::post('/loginpage', [LoginController::class, 'store']);

//route logout
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth');



require __DIR__.'/auth.php';
