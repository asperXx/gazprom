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

    public function sendFlame(Request $request) {

        for ($i = 0; $i < $request->get('flames'); $i++) {
            User::where('id', $request->get('user'))->decrement('flames');
            User::where('email', $request->get('email'))->increment('flames');
        }

        $user = User::where('id', $request->get('user'))->get();
        return response()->json(['user' => $user]);
    }

    public function chart() {
        $users = User::orderBy('flames', 'desc')->get();

        $users_deps = [];
        $users_branches = [];
        $user_medals = [];

        for ($i = 0; $i < count($users); $i++) {

            $dep = Department::where('id', $users[$i]['department_id'])->get('department');
            array_push($users_deps, $dep);

            $branch = DB::table('branches')->where('id', $users[$i]['branch_id'])->get('title');
            array_push($users_branches, $branch);

            $medals = DB::table('medals')->where('user_id', $users[$i]['id'])->get('href');
            array_push($user_medals, $medals);
        }

        return response()->json(['users' => $users, 'users_dep' => $users_deps, 'users_branches' => $users_branches, 'medals' => $user_medals]);
    }

    public function medals($id) {
        $user_medals = DB::table('medals')->where('user_id', $id)->get();
        // $medals = $user_medals[0]->medal_id);
        return response()->json(['user_medals' => $user_medals]);
    }
}
