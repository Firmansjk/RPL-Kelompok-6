<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
        'canLogin' => Route::has('login'),
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

Route::get('/dashboardpage', function () {
    return Inertia::render('DashboardPage');
})->name('dashboardpage');

Route::get('/profilepage', function () {
    return Inertia::render('ProfilePage');
})->name('profilepage');

Route::get('/menupage', function () {
    return Inertia::render('MenuPage');
})->name('menupage');

Route::get('/loginpage', function () {
    return Inertia::render('LoginPage');
})->name('loginpage');

Route::get('/registerpage', function () {
    return Inertia::render('RegisterPage');
})->name('registerpage');

require __DIR__.'/auth.php';
