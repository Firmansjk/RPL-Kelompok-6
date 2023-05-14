<?php

namespace App\Http\Controllers;

use App\Models\Packets;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Image;
use Inertia\Inertia;

class PacketsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function VendorAllPacket()
    {
        $id = Auth::user()->id;
        $packets = Packets::where('vendor_id', $id)->latest()->get();
        return Inertia::render('MenuPage', compact('packets'));
    }

    public function VendorAddPacket(Request $request)
    {
        $image = $request->file('packet_picture');
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        Image::make($image)->resize(800,800)->save('upload/packets/'.$name_gen);
        $save_url = 'upload/packets/'.$name_gen;

        $packet_id = Packets::insertGetId([
            'packet_name' => $request->packet_name,
            'packet_price' => $request->packet_price,
            'packet_desc' => $request->packet_desc,
            'packet_picture' => $save_url,
            'vendor_id' => Auth::user()->id,
        ]);

        return redirect()->back();
    }

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
