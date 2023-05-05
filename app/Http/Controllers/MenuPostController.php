<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MenuPostController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function MenuPost()
    {
        //get all posts from database
        $posts = VendorMenu::all();

        //render with data "posts"
        return Inertia::render('MenuPage', [
            'posts' => 'test'
        ]);
    }
}
