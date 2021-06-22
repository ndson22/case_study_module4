<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
   
    function login(Request $request)
    {
        $credentials = $request->only('account', 'password','role');
        try {
            if (! $token = JWTAuth::attempt($credentials)){
                return response()->json([
                   'status' => 'error',
                   'message' => 'Email or password is not correct'
                ]);
            }
        }catch (JWTException $e){
            return response()->json([
                'error' => 'could not create token !!'
            ], 500);
        }
        $user = Auth::user();

        return response()->json([
            'status' => 'successfully',
            'user' => $user,
            'token' => $token
        ], 200);
    }
}
