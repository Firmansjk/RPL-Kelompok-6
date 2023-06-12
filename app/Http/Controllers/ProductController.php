<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Image;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
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
    public function VendorProductDelete($id){

        $product = Product::findOrFail($id);
        unlink($product->product_picture);
        $product->delete();

        $notification = array(
            'message' => 'Vendor Product Deleted Successfully',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);

    }// End Method 
    public function VendorEditProduct($id){
        $user = Auth::user();
        $products = Product::findOrFail($id);
        return Inertia::render('VendorPage/PageEditMenu', compact('products', 'user'));
    }// End Method
    
    public function VendorUpdateProduct(Request $request){
        // dd($request);
        $product_id = $request->id;
        $product = Product::findOrFail($product_id);

        $image = $request->file('product_picture');
        $oldImage = $product->product_picture;

        if ($image) {
            $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            Image::make($image)->resize(800, 800)->save(public_path('upload/products/' . $name_gen));
            $save_url = 'upload/products/' . $name_gen;

            if (file_exists(public_path($oldImage))) {
                unlink(public_path($oldImage));
            }

            $product->update([
                'product_picture' => $save_url,
            ]);
        }
        $product_id = $request->id;
        $product = Product::findOrFail($product_id);
        $product->update([
    
            'product_name' => $request->product_name,
            'product_price' => $request->product_price,
        ]);
    
        return Redirect::route('vendor.menupage');
    
    }// End Method 
}


