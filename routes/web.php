<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PacketController;



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
    return Inertia::render('UserPage/homePage', [
        // 'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//User Routes
Route::get('/', function () {
    return Inertia::render('UserPage/homePage');
})->name('homepage');

Route::get('/profilecatering', function () {
    return Inertia::render('UserPage/profileCatering');
})->name('profilecatering');

Route::get('/searchcatering', function () {
    return Inertia::render('UserPage/searchCatering');
})->name('searchcatering');

Route::get('/searchmenu', function () {
    return Inertia::render('UserPage/searchMenu');
})->name('searchmenu');

Route::get('/loginpageuser', function () {
    return Inertia::render('UserPage/loginpage');
})->name('loginpageuser');

Route::get('/registerpageuser', function () {
    return Inertia::render('UserPage/registerpage');
})->name('registerpageuser');

Route::get('/forgetpassword', function () {
    return Inertia::render('UserPage/lupaPass');
})->name('forgetpassword');

Route::get('/userprofilesettings', function () {
    return Inertia::render('UserPage/settingProfile');
})->name('userprofilesettings');

//Laravel Breeze
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/registerpage', function () {
    return Inertia::render('RegisterPage');
})->name('registerpage');

Route::post('/vendor/register', [VendorController::class, 'VendorRegister'])->
    name('vendor.register');
Route::get('/vendor/login', [VendorController::class, 'VendorLogin'])->
    name('vendor.login');
Route::get('/vendor/register', [VendorController::class, 'VendorRegisterPage'])->
    name('vendor.registerpage');;

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
    
    Route::post('/vendor/tambahpaket', [VendorController::class, 'AddPackets'])->
        name('vendor.tambahpaket');

    Route::post('/vendor/tambahpaket', [VendorController::class, 'AddPackets'])->
        name('vendor.tambahpaket');

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
        
        //test search
    Route::post('/vendor/search', [PacketController::class, 'searchVendor'])->name('vendor.search');


Route::controller(ProductController::class)->group(function(){
    Route::get('/vendor/all/product', 'VendorAllProduct')->name('vendor.all.product');
    Route::post('/vendor/add/product', 'VendorAddProduct')->name('vendor.add.product');
    Route::delete('/vendor/delete/{id}' , 'VendorProductDelete')->name('vendor.delete.product');
});

Route::controller(PacketController::class)->group(function(){
    Route::get('/vendor/menupage', 'VendorAllPacket')->name('vendor.all.packet');
    Route::post('/vendor/add/packet', 'VendorAddPacket')->name('vendor.add.packet');
    Route::get('/vendor/edit/{id}' , 'VendorEditPacket')->name('vendor.edit.packet');
    Route::delete('/vendor/hapus/{id}' , 'VendorPacketDelete')->name('vendor.delete.packet');
    Route::post('/vendor/update' , 'VendorUpdatePacket')->name('vendor.update.packet');
});

});




require __DIR__.'/auth.php';
