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

Route::get('/loginpage', function () {
    return Inertia::render('LoginPage');
})->name('loginpage');

Route::get('/lupaspass', function () {
    return Inertia::render('lupaPass');
})->name('lupapass');

Route::middleware(['auth','role:admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'AdminDashboard'])->name('admin.dashboard');
});


/// Vendor Dashboard
route::middleware(['auth','role:vendor'])->group(function() {
    Route::get('/vendor/dashboard', [VendorController::class, 'VendorDashboard'])->
        name('vendor.dashboard');

    Route::get('/vendor/profilepage', [VendorController::class, 'VendorProfile'])->
        name('vendor.profilepage');

    Route::get('/vendor/menupage', [VendorController::class, 'VendorMenu'])->
        name('vendor.menupage');
    
    Route::post('/vendor/tambahpaket', [VendorController::class, 'AddPackets'])->
        name('vendor.tambahpaket');

    Route::post('/vendor/tambahpaket', [VendorController::class, 'AddPackets'])->
        name('vendor.tambahpaket');
    // Route::get('/vendor/createeditmenu', [VendorController::class, 'CreateVendorMenu'])->
    //     name('vendor.createeditmenu');
    // Route::resource('posts', PacketsController::class);
    // Route::post('/vendor/menupage/store', [VendorController::class, 'StoreVendorMenu'])->
    //     name('vendor.menupage.AddPackets');

    Route::post('/vendor/logout', [VendorController::class, 'VendorDestroy'])->
        name('vendor.logout');

    Route::patch('/vendor/profilepage', [VendorController::class, 'VendorUpdate'])->
        name('profile.change');
        
    Route::post('/vendor/profile/update', [VendorController::class, 'VendorProfilePicture'])->
        name('image.upload');

    Route::post('/vendor/sampul/update', [VendorController::class, 'VendorSampulPicture'])->
        name('image.upload');
        
    Route::post('/vendor/changepassword', [VendorController::class, 'VendorChangePassword'])->
        name('vendor.changepassword');

    Route::delete('vendor/delete-profile', [VendorController::class, 'VendorDeleteProfile'])->
        name('vendor.deleteProfile');

});

// //route index login
// Route::get('/loginpage', [VendorController::class, 'VendorLogin'])
//     ->name('vendor.login');

// route::middleware(['auth','role:vendor'])->group(function() {
//     Route::get('/dashboardpage', [VendorController::class, 'VendorDashboard'])->name('vendor.menupage');
// });

// route::middleware(['auth','role:vendor'])->group(function() {
//     Route::get('/vendor/dashboard', [VendorController::class, 'VendorDashboard']);
// });

// //route store login
// Route::post('/loginpage', [LoginController::class, 'store']);

// //route logout
// Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth');



require __DIR__.'/auth.php';
