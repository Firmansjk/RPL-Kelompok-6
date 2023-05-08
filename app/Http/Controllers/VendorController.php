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
        // $request->validate([
        //     'name' => 'required',
        //     'email' => 'required|email|unique:users,email',
        //     'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ]);
        // if ($request->hasFile('photo')) {
        //     $fileName = time().'_'.$request->file('photo')->getClientOriginalName();
        //     $path = $request->file('photo')->storeAs('public/images', $fileName);
        // } else {
        //     $fileName = null;
        // }

        $user = Auth::user();
        
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->vendor_info = $request->vendor_info;
        // $user->photo = $fileName;
        $user->photo = $request->photo;

        // // Menyimpan nama asli file foto yang diunggah
        // $filename = $request->file('photo')->getClientOriginalName();

        // // Menyimpan file foto ke direktori 'public/uploads/vendor_images'
        // $request->file('photo')->move(public_path('uploads/vendor_images'), $filename);

        // // Menyimpan nama file foto ke kolom 'photo' pada user yang bersangkutan di database
        // $user->photo = $filename;

        // if ($request->file('photo')) {
        //     $file = $request->file('photo');
        //     $filename = time().$file->getClientOriginalName();
        //     $file->move(public_path('upload/vendor_images'),$filename);
        //     $user['photo'] = $filename;
        //     $user->photo = Storage::url($path);
        // }

        // $input = $request->all();

        // if ($request->file('photo')) {
        //     $file = $request->file('photo');
        //     $destination_path = "public/upload/vendor_images";
        //     $filename = time().$file->getClientOriginalName();
        //     $path = $request->
           
        //     $user['photo'] = $filename;
        // }

        // if ($request->hasFile('profile_photo')) {
        //     $path = $request->file('images')->store('public/upload/vendor_images');
        //     $user->profile_photo_path = Storage::url($path);
        // }

        // if ($request->hasFile('photo')) {
        //     // Get uploaded file
        //     $file = $request->file('photo');
    
        //     // Generate unique filename
        //     $filename = time() . '_' . $file->getClientOriginalName();
    
        //     // Store file to storage/app/public directory
        //     $path = $file->storeAs('public', $filename);
    
        //     // Set photo path to user data
        //     $user->photo = $filename;
        // }

        // $validatedData = $request->validate([
        //     'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ]);
    
        // $fileName = time() . '.' . $request->photo->extension();
    
        // $request->photo->storeAs('public/upload/vendor_images', $fileName);
    
        // $user->photo = $fileName;

    //     $request->validate([
    //         'photo' => 'required|image|max:2048'
    //     ]);

    //     // Mengambil file foto dari request
    // $photoFile = $request->file('photo');

    // // Membuat nama file dengan timestamp untuk menghindari nama file yang sama
    // $filename = time() . '.' . $photoFile->getClientOriginalExtension();

    // // Menyimpan file foto ke direktori public/upload/vendor_images dengan nama file yang telah dibuat
    // $photoFile->move(public_path('upload/vendor_images'), $filename);

    // // Menyimpan nama file foto ke database
    // $user->photo = $filename;

        $user->save();
        
        return redirect()->back()->with('success', 'Profile updated successfully!');
    }

    public function VendorProfilePicture(Request $request)
    {  
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        // dapatkan user yang sedang login
        $user = Auth::user();
    
        // simpan gambar ke direktori storage/app/public/images
        $path = $request->file('image')->store('public/images');
    
        // simpan data gambar ke database
        $user->photo()->create([
            'path' => $path,
            'title' => $request->file('image')->getClientOriginalName(),
        ]);
    
        // kembali ke halaman sebelumnya dengan pesan sukses
        return back()->with('success', 'Image uploaded successfully.');
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
