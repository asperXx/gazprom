<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\JWTAuth;
use Illuminate\Http\Request;
use App\User;
use App\Department;
use App\Position;

use Auth;

class SignInController extends Controller
{
    public function __invoke(Request $request) {
        
        if (!$token = auth()->attempt($request->only('email', 'password'))) {
            return response("Попытка не удалась!", 401);
        }
        
        $user = User::where('email', $request->input('email'))->get();
        
        $user_dep = Department::where('id', $user->toArray()[0]['department_id'])->get();
        $user_pos = Position::where('id', $user->toArray()[0]['position_id'])->get();

        return response()->json(compact('token', 'user', 'user_dep', 'user_pos'));
    }

}
