<?php

namespace App\Http\Controllers;

use App\Models\packets;
use Illuminate\Http\Request;

class PacketsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Packets::latest()->get();

        return Inertia::render('Packets/Index', ['posts' => $posts]);
    }

    public function AddPackets()
    {
        dd($request->all());
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Packets/Create');
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
