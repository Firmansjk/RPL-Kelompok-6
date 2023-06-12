<?php

namespace App\Http\Controllers\Auth;

use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\URL;

class VerifyEmailController extends Controller
{
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(RouteServiceProvider::HOME.'?verified=1');
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        // Check the user's role and redirect accordingly
        $role = $request->user()->role; // Assuming 'role' is the field that represents the user's role
        $redirectRoute = $this->getRedirectRouteBasedOnRole($role);

        return Redirect::intended(URL::route($redirectRoute).'?verified=1');
    }

    private function getRedirectRouteBasedOnRole($role): string
    {
        // Define the redirect routes for each role
        $redirectRoutes = [
            'vendor' => 'vendor.dashboard', // Replace 'vendor.dashboard' with the actual route for the vendor's page
            'user' => 'user.dashboard',     // Replace 'user.dashboard' with the actual route for the user's page
        ];

        // Return the appropriate redirect route based on the user's role
        return $redirectRoutes[$role] ?? RouteServiceProvider::HOME;
    }
}


