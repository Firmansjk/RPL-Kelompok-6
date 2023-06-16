<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            if ($request->is('admin/*')) {
                // Pengguna tidak terotentikasi saat mengakses rute di dalam grup 'admin'
                return route('admin.login');
            } elseif ($request->is('vendor/*')) {
                // Pengguna tidak terotentikasi saat mengakses rute di dalam grup 'vendor'
                return route('vendor.login');
            }
        }
    }
}
