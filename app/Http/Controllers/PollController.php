<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class PollController extends Controller
{
    public function index() {
        $results = DB::table('poll')->get();
        return response()->json(['results' => $results]);
    }

    public function poll(Request $request) {

        $result = $request->result[key($request->result)];
        $user_id = $request->get('user_id');
        
        DB::table('poll')->insert(['field' => key($request->result), 'result' => $result, 'user_id' => $user_id]);
    }
}
