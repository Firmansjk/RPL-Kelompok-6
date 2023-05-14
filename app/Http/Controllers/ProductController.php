<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Image;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function __construct()
{
    $this->middleware('auth');
}
    public function VendorAllProduct()
    {
        $id = Auth::user()->id;
        $products = Product::where('vendor_id', $id)->latest()->get();
        return Inertia::render('MenuPage', compact('products'));
    }

    public function VendorAddProduct(Request $request)
    {
        $image = $request->file('product_picture');
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        Image::make($image)->resize(800,800)->save('upload/products/'.$name_gen);
        $save_url = 'upload/products/'.$name_gen;

        $product_id = Product::insertGetId([
            'product_name' => $request->product_name,
            'product_price' => $request->product_price,
            'product_picture' => $save_url,
            'vendor_id' => Auth::user()->id,
        ]);

        return redirect()->back();
    }
}
