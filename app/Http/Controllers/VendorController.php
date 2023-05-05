<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\VendorMenu;

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
        
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->phone_number = $request->phone_number;
        $user->address = $request->address;
        $user->description = $request->description;

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
        // return Inertia::render('MenuPage');
        //get all posts from database
        $posts = VendorMenu::all();

        //render with data "posts"
        return Inertia::render('MenuPage', [
            'posts' => $posts->toArray()
        ]);
    }

     /**
     * create
     *
     * @return void
     */
    public function CreateVendorMenu()
    {
        return Inertia::render('CreateMenuPage');
    }
    
    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function StoreVendorMenu(Request $request)
    {
        //set validation
        $request->validate([
            'product_name' => 'required',
            'product_desc' => 'required',
        ]);

        //create post
        $post = Post::create([
            'product_name'  => $request->product_name,
            'product_desc'  => $request->product_desc
        ]);

        if($post) {
            return Redirect::route('posts.VendorMenu')->with('message', 'Data Berhasil Disimpan!');
        }
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
