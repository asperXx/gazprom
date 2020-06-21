<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Department;
use DB;

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

        $user = User::where('id', $user_id)->get();
        return response()->json(['user' => $user]);
    }

    public function chart() {
        $users = User::orderBy('flames', 'desc')->get();
        $users_dep = [];

        for ($i = 0; $i < count($users); $i++) {
            $dep = Department::where('id', $users[$i]['department_id'])->get('department');
            array_push($users_dep, $dep);
        }

        return response()->json(['users' => $users, 'users_dep' => $users_dep]);
    }

    public function medals($id) {
        $user_medals = DB::table('medals')->where('user_id', $id)->get();
        // $medals = $user_medals[0]->medal_id);
        return response()->json(['user_medals' => $user_medals]);
    }
}
