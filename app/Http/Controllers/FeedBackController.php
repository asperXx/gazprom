<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;

class FeedBackController extends Controller
{
    public function index() {
        $feedbacks = DB::table('feedbacks')->get();
        return response()->json()->compact('feedbacks');
    }

    public function create(Request $request) {
        $feedback = $request->get('feedback');
        $user_id = $request->get('user_id');

        DB::table('feedbacks')->insert(['user_id' => $user_id, 'feedback' => $feedback]);
    }

    public function getMyFeedbacks($id) {
        $feedbacks = DB::table('feedbacks')->where('user_id', $id)->get();
        return response()->json(['feedbacks' => $feedbacks]);
    }
}
