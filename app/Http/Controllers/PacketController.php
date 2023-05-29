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
use Illuminate\Support\Facades\Redirect;

class PacketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

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

    public function VendorDeletePacket($id)
    {
        $packet = Packet::findOrFail($id);
        $packet->delete();

        return redirect()->back();
    }


    public function VendorEditPacket($id){
        $user = Auth::user();
        $packets = Packet::findOrFail($id);
        return Inertia::render('PageEditPaket', compact('packets', 'user'));
    }// End Method

    public function VendorUpdatePacket(Request $request){
        $packet_id = $request->id;
        $packet = Packet::findOrFail($packet_id);

        $image = $request->file('packet_picture');
        $oldImage = $packet->packet_picture;

        if ($image) {
            $name_gen = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
            Image::make($image)->resize(800, 800)->save(public_path('upload/packets/' . $name_gen));
            $save_url = 'upload/packets/' . $name_gen;

            if (file_exists(public_path($oldImage))) {
                unlink(public_path($oldImage));
            }

            $packet->update([
                'packet_picture' => $save_url,
            ]);
        }

        $packet_id = $request->id;
        $packet = Packet::findOrFail($packet_id);
        $packet->update([

            'packet_name' => $request->packet_name,
            'packet_price' => $request->packet_price,
            'packet_desc' => $request->packet_desc, 
        ]);
    
        return Redirect::route('vendor.menupage');

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
    
}
