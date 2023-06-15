<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Packet;
use App\Models\Product;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Response;

class UserController extends Controller
{
    public function index()
    {
            // Cek apakah pengguna sudah masuk atau belum
        if (Auth::check()) {
            // Pengguna belum masuk, arahkan kembali
            return redirect()->back();
        }
        // Mengambil data user yang memiliki role "vendor"
        $users = User::where('role', 'vendor')->get();
        $packets = Packet::with('user')->get();
        // $packets = User::where('role', 'vendor')->get();

        return Inertia::render('UserPage/HomePage', compact('users', 'packets'));
    }

    public function Homepage()
    {
        // Mengambil data user yang memiliki role "vendor"
        $user = Auth::user();
        $users = User::where('role', 'vendor')->get();
        $packets = Packet::with('user')->get();
        // $packets = User::where('role', 'vendor')->get();

        return Inertia::render('UserPage/HomePageLogin', compact('users', 'packets', 'user'));
    }

    public function SearchCatering(Request $request)
    {
        $user = Auth::user();
        $searchQuery = $request->query('query'); // Mengambil query pencarian dari permintaan

        // Lakukan pencarian pada pengguna yang memiliki peran vendor
        $results = User::withCount(['products', 'packets'])
            ->where('role', 'vendor')
            ->where(function ($query) use ($searchQuery) {
                $query->where('name', 'like', "%$searchQuery%")
                    ->orWhere('address', 'like', "%$searchQuery%");
            })
            ->get();

        return Inertia::render('UserPage/SearchCatering', compact('results', 'user', 'searchQuery'));
    }

    public function SearchMenu(Request $request)
{
    $user = Auth::user();
    $sorting = $request->query('sorting');
    $searchQuery = $request->query('query');

    $packets = Packet::where('packet_name', 'like', "%$searchQuery%")
        ->with('user');

    if ($sorting === 'highToLow') {
        $packets = $packets->orderByDesc('packet_price');
    } elseif ($sorting === 'lowToHigh') {
        $packets = $packets->orderBy('packet_price');
    }

    $packets = $packets->get();

    $products = Product::where('product_name', 'like', "%$searchQuery%")
        ->with('user');

    if ($sorting === 'highToLow') {
        $products = $products->orderByDesc('product_price');
    } elseif ($sorting === 'lowToHigh') {
        $products = $products->orderBy('product_price');
    }

    $products = $products->get();

    return Inertia::render('UserPage/SearchMenu', compact('user', 'packets', 'products', 'searchQuery'));
}

    public function UserLogin()
    {
        if (Auth::check()) {
            // Pengguna belum masuk, arahkan kembali
            return redirect()->back();
        }

        return Inertia::render('UserPage/LoginPageUser', [
            'canResetPassword' => Route::has('password.request'),
        ]);
    }

    public function UserRegisterPage()
    {
        if (Auth::check()) {
            // Pengguna belum masuk, arahkan kembali
            return redirect()->back();
        }
        return Inertia::render('UserPage/RegisterPage');
    }

    public function UserRegister(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        $notification = [
            'message' => 'Vendor Registered Successfully',
            'alert-type' => 'success'
        ];

        return Inertia::render('UserPage/LoginPageUser')->with('notification', $notification);
    }

    public function UserProfile(){

        $user = Auth::user();

        return Inertia::render('UserPage/SettingProfile', compact('user'));
    }

    public function UserUpdate(Request $request)
    {

        $user = Auth::user();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->phone = $request->phone;
        $user->address = $request->address;


        $user->save();

        return redirect()->back()->with('success', 'Profile updated successfully!');
    }

    public function UserProfilePicture(Request $request)
    {
        $id = Auth::user()->id;
        $data = User::find($id);

        if ($request->file('photo')) {
            $file = $request->file('photo');
            @unlink(public_path('upload/user_profile/'.$data->photo));
            $filename = time().$file->getClientOriginalName();
            $file->move(public_path('upload/user_profile'), $filename);
            $data['photo'] = $filename;
        }

        $data->save();
        return redirect()->back();
    }

    public function UserDeleteProfile(Request $request)
    {
        $id = Auth::user()->id;
        $data = User::find($id);

        if ($data->photo) {
            // Hapus foto dari direktori upload
            $file_path = public_path('upload/user_profile/' . $data->photo);
            if (file_exists($file_path)) {
                unlink($file_path);
            }

            // Hapus nama foto dari kolom photo di database
            $data->photo = null;
            $data->save();
        }
        return redirect()->back();
    }

    public function ShowProfile(Request $request, $userId)
    {
        // Mengambil data pengguna
        $user = Auth::user();
        $users = User::find($userId);

        // Mengambil packet dan product yang terhubung dengan vendor_id pengguna
        $packets = Packet::where('vendor_id', $users->id)->get();
        $products = Product::where('vendor_id', $users->id)->get();

        // Menampilkan halaman profil dengan data yang diperlukan
        return Inertia::render('UserPage/ProfileCatering', compact('user', 'packets', 'products', 'users'));
    }

    public function HubungiPenjual(Request $request, $userId)
    {
        $users = User::find($userId);
        $user = Auth::user();

        return Inertia::render('UserPage/HubungiPenjual', compact('user', 'users'));
    }

    public function UserDestroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
