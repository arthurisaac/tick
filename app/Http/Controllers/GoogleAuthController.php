<?php

namespace App\Http\Controllers;

use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect() {
        return Socialite::driver("google")->redirect();
    }

    public function callbackGoogle(Request $request) {
        try {   
            $google_user = Socialite::driver("google")->user();
            $user = User::where("google_id", $google_user->getId())->first();
            if (!$user) {
                $new_user = User::create([
                    'name'  => $google_user->getName(),
                    'email'=> $google_user->getEmail(),
                    'google_id' => $google_user->getId(),
                    'avatar' => $google_user->getAvatar(),
                ]);

                Auth::login($new_user);

                return redirect()->intended('dashboard');
            } else {
                Auth::login($user);
                return redirect()->intended('dashboard');
            }
        } catch (\Throwable $throwable) {
            throw ValidationException::withMessages([$throwable->getMessage()]);
            //dd($throwable->getMessage());
        }
    }
}
