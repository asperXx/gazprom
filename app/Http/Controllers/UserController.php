<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Department;

class UserController extends Controller
{
    public function update($id, Request $request) {
        $dep = Department::where('id', $request->get('user_dep')['id'])->get('id');
        $update = User::where('id', $id)->update([
            'last_name' => $request->get('user')['last_name'],
            'name' => $request->get('user')['name'],
            'second_name' => $request->get('user')['second_name'],
            'phone' => $request->get('user')['phone'],
            'email' => $request->get('user')['email'],
            'desc' => $request->get('user')['desc'],
            'department_id' => json_decode($dep)[0]->id
        ]);

        if ($update) {
            $user = User::where('id', $id)->get();

            return response()->json(['status', 'Success', 'user' => $user]);
        }
        return response()->json(['status', 'Failure']);
    }

    public function depAll() {
        $dep_all = Department::all();
        return response()->json(['dep_all' => $dep_all]);
    }

    public function sendFlame($user_id, $email) {
        User::where('id', $user_id)->decrement('flames');
        User::where('email', $email)->increment('flames');
    }

    public function chart() {
        $users = User::orderBy('flames', 'desc')->get();
        return response()->json(['users' => $users]);
    }
}
