<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PacketController;
use App\Http\Controllers\UserController;


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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         // 'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Route::get('/', function () {
//     return Inertia::render('userpage/HomePage');
// })->name('homepage');

Route::middleware('guest')->group(function () {
    Route::get('/', [UserController::class, 'index'])->
    name('homepage');
    Route::post('/register', [UserController::class, 'UserRegister'])->
    name('user.register');
    Route::get('/register', [UserController::class, 'UserRegisterPage'])->
    name('user.registerpage');
    Route::get('/login', [UserController::class, 'UserLogin'])->
    name('user.login');
    //dari user no middleware
    Route::get('/home', [UserController::class, 'Homepage'])->
    name('user.home');
    Route::get('/search-catering', [UserController::class, 'SearchCatering'])->
        name('user.searchcatering');
    Route::get('/search-menu', [UserController::class, 'SearchMenu'])->
        name('user.searchmenu');
    Route::get('/user/profilepage', [UserController::class, 'UserProfile'])->
        name('user.profilepage');
    Route::patch('/user/profilepage', [VendorController::class, 'VendorUpdate'])->
        name('user.profile.change');
    Route::post('/user/picture/update', [UserController::class, 'UserProfilePicture'])->
        name('user.photo.upload');
    Route::delete('user/delete-profile', [UserController::class, 'UserDeleteProfile'])->
        name('user.deleteProfile');
    Route::get('/profiltoko/{userId}', [UserController::class, 'ShowProfile'])->
        name('user.profiltoko');
    Route::get('/hubungipenjual/{userId}', [UserController::class, 'HubungiPenjual'])->
        name('user.hubungipenjual');


    Route::post('/vendor/register', [VendorController::class, 'VendorRegister'])->
    name('vendor.register');
    Route::get('/vendor/login', [VendorController::class, 'VendorLogin'])->
    name('vendor.login');
    Route::get('/vendor/register', [VendorController::class, 'VendorRegisterPage'])->
    name('vendor.registerpage');

    Route::get('/admin/login', [AdminController::class, 'AdminLogin'])->
    name('admin.login');
});

Route::get('/loginpage', function () {
    return Inertia::render('LoginPage');
})->name('loginpage');

Route::get('/lupapass', function () {
    return Inertia::render('lupaPass');
})->name('lupapass');

Route::get('/verify-email', function () {
    return Inertia::render('verification');
})->name('lupapass');

Route::post('/verify-email/logout', [VendorController::class, 'VendorDestroy'])->
        name('verify-email.logout');

Route::middleware(['auth','role:admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'AdminDashboard'])->name('admin.dashboard');
});


/// Vendor Dashboard
route::middleware(['auth','role:vendor', 'verified'])->group(function() {
    Route::get('/vendor/dashboard', [VendorController::class, 'VendorDashboard'])->
        name('vendor.dashboard');

    Route::get('/vendor/profilepage', [VendorController::class, 'VendorProfile'])->
        name('vendor.profilepage');

    Route::get('/vendor/menupage', [VendorController::class, 'VendorMenu'])->
        name('vendor.menupage');

    Route::post('/vendor/logout', [VendorController::class, 'VendorDestroy'])->
        name('vendor.logout');

    Route::patch('/vendor/profilepage', [VendorController::class, 'VendorUpdate'])->
        name('vendor.profile.change');

    Route::post('/vendor/picture/update', [VendorController::class, 'VendorProfilePicture'])->
        name('vendor.photo.upload');

    Route::post('/vendor/sampul/update', [VendorController::class, 'VendorSampulPicture'])->
        name('vendor.sampul.upload');

    Route::post('/vendor/changepassword', [VendorController::class, 'VendorChangePassword'])->
        name('vendor.changepassword');

    Route::delete('vendor/delete-profile', [VendorController::class, 'VendorDeleteProfile'])->
        name('vendor.deleteProfile');


    Route::controller(ProductController::class)->group(function(){
        Route::get('/vendor/all/product', 'VendorAllProduct')->name('vendor.all.product');
        Route::post('/vendor/add/product', 'VendorAddProduct')->name('vendor.add.product');
        Route::get('/vendor/editProduct/{id}' , 'VendorEditProduct')->name('vendor.edit.product');
        Route::delete('/vendor/delete/{id}' , 'VendorProductDelete')->name('vendor.delete.product');
        Route::post('/vendor/updateProduct' , 'VendorUpdateProduct')->name('vendor.update.product');
    });

    Route::controller(PacketController::class)->group(function(){

        Route::post('/vendor/add/packet', 'VendorAddPacket')->name('vendor.add.packet');
        Route::get('/vendor/editPacket/{id}' , 'VendorEditPacket')->name('vendor.edit.packet');
        Route::delete('/vendor/hapus/{id}' , 'VendorPacketDelete')->name('vendor.delete.packet');
        Route::post('/vendor/updatePacket' , 'VendorUpdatePacket')->name('vendor.update.packet');
    });

});

route::middleware([])->group(function() {
    // Route::get('/home', [UserController::class, 'Homepage'])->
    //     name('user.home');
    // Route::get('/search-catering', [UserController::class, 'SearchCatering'])->
    //     name('user.searchcatering');
    // Route::get('/search-menu', [UserController::class, 'SearchMenu'])->
    //     name('user.searchmenu');
    // Route::get('/user/profilepage', [UserController::class, 'UserProfile'])->
    //     name('user.profilepage');
    // Route::patch('/user/profilepage', [VendorController::class, 'VendorUpdate'])->
    //     name('user.profile.change');
    // Route::post('/user/picture/update', [UserController::class, 'UserProfilePicture'])->
    //     name('user.photo.upload');
    // Route::delete('user/delete-profile', [UserController::class, 'UserDeleteProfile'])->
    //     name('user.deleteProfile');
    // Route::get('/profiltoko/{userId}', [UserController::class, 'ShowProfile'])->
    //     name('user.profiltoko');
    // Route::get('/hubungipenjual/{userId}', [UserController::class, 'HubungiPenjual'])->
    //     name('user.hubungipenjual');

    // Route::get('/vendor/menupage', [VendorController::class, 'VendorMenu'])->
    //     name('vendor.menupage');

    Route::post('/user/logout', [UserController::class, 'UserDestroy'])->
        name('user.logout');

    // Route::post('/vendor/profile/update', [VendorController::class, 'VendorProfilePicture'])->
    //     name('image.upload');

    // Route::post('/vendor/sampul/update', [VendorController::class, 'VendorSampulPicture'])->
    //     name('image.upload');

    // Route::post('/vendor/changepassword', [VendorController::class, 'VendorChangePassword'])->
    //     name('vendor.changepassword');
});


route::middleware(['auth','role:admin'])->group(function() {
    // Route::get('/vendor/dashboard', [VendorController::class, 'VendorDashboard'])->
    //     name('vendor.dashboard');

    Route::get('/admin/profilepage', [AdminController::class, 'AdminProfile'])->
        name('admin.profilepage');

    Route::get('/admin/listuser', [AdminController::class, 'ListUser'])->
        name('admin.listuser');

    Route::get('/admin/listvendor', [AdminController::class, 'ListVendor'])->
        name('admin.listvendor');

    Route::get('/admin/editUser/{id}', [AdminController::class, 'EditUser'])->
        name('admin.edit.user');

    Route::get('/admin/editVendor/{id}', [AdminController::class, 'EditVendor'])->
        name('admin.edit.vendor');

    Route::post('/admin/updateUser', [AdminController::class, 'UpdateUser'])->
        name('admin.update.user');

    Route::post('/admin/updateVendor', [AdminController::class, 'UpdateVendor'])->
        name('admin.update.vendor');

    Route::delete('admin/deleteUser', [AdminController::class, 'UserDelete'])->
        name('admin.delete.user');

    Route::delete('admin/deleteVendor', [AdminController::class, 'VendorDelete'])->
        name('admin.delete.vendor');

    Route::post('/admin/logout', [AdminController::class, 'AdminDestroy'])->
        name('admin.logout');

    Route::patch('/admin/profilepage', [AdminController::class, 'AdminUpdate'])->
        name('admin.profile.change');

    Route::post('/admin/picture/update', [AdminController::class, 'AdminProfilePicture'])->
        name('admin.photo.upload');

    // Route::post('/vendor/changepassword', [VendorController::class, 'VendorChangePassword'])->
    //     name('vendor.changepassword');

    Route::delete('vendor/delete-profile', [AdminController::class, 'AdminDeleteProfile'])->
        name('admin.deleteProfile');

});

require __DIR__.'/auth.php';
