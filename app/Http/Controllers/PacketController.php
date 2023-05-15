<?php

namespace App\Http\Controllers;

use App\Models\Packet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Image;
use Inertia\Inertia;
use App\Models\Product;

class PacketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function VendorAllPacket()
    {
        $id = Auth::user()->id;
        $packets = Packet::where('vendor_id', $id)->latest()->get();
        $products = Product::where('vendor_id', $id)->latest()->get();
        return Inertia::render('MenuPage', compact('packets', 'products'));
    }

    public function VendorAddPacket(Request $request)
    {
        $image = $request->file('packet_picture');
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        Image::make($image)->resize(800,800)->save('upload/packets/'.$name_gen);
        $save_url = 'upload/packets/'.$name_gen;

        $packet_id = Packet::insertGetId([
            'packet_name' => $request->packet_name,
            'packet_price' => $request->packet_price,
            'packet_desc' => $request->packet_desc,
            'packet_picture' => $save_url,
            'vendor_id' => Auth::user()->id,
        ]);

        return redirect()->back();
    }

    public function VendorUpdatePacket(Request $request, $id)
{
    $image = $request->file('packet_picture');
    $packet = Packet::find($id);

    if ($image) {
        $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        Image::make($image)->resize(800, 800)->save('upload/packets/' . $name_gen);
        $save_url = 'upload/packets/' . $name_gen;

        $packet->packet_picture = $save_url;
    }

    $packet->packet_name = $request->packet_name;
    $packet->packet_price = $request->packet_price;
    $packet->packet_desc = $request->packet_desc;
    $packet->save();

    return redirect()->back();
}

public function VendorDeletePacket($id)
{
    $packet = Packet::findOrFail($id);
    $packet->delete();

    return redirect()->back();
}


    public function VendorEditProduct($id){
        $products = Product::findOrFail($id);
        return Inertia::render('MenuPage', compact('packets'));
    }// End Method

    public function VendorUpdateProduct(Request $request){

        $product_id = $request->id;

        Product::findOrFail($product_id)->update([

            'packet_name' => $request->packet_name,
            'packet_price' => $request->packet_price,
            'packet_desc' => $request->packet_desc, 
        ]);


   return redirect()->back(); 

}// End Method 

    public function VendorPacketDelete($id){

        $packet = Packet::findOrFail($id);
        unlink($packet->packet_picture);
        $packet->delete();

        $notification = array(
            'message' => 'Vendor Product Deleted Successfully',
            'alert-type' => 'success'
        );

        return redirect()->back()->with($notification);

    }// End Method 


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Packets::create(
            $request->validated()
        );

        return Redirect::route('posts.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\packets  $packets
     * @return \Illuminate\Http\Response
     */
    public function show(packets $packets)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\packets  $packets
     * @return \Illuminate\Http\Response
     */
    public function edit(packets $packets)
    {
        return Inertia::render('Packets/Edit', [
            'post' => [
                'id' => $post->id,
                'product_name' => $post->product_name,
                'product_desc' => $post->product_desc
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\packets  $packets
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, packets $packets)
    {
        $post->update($request->validated());

        return Redirect::route('posts.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\packets  $packets
     * @return \Illuminate\Http\Response
     */
    public function destroy(packets $packets)
    {
        $post->delete();

        return Redirect::route('posts.index');
    }


    
}
