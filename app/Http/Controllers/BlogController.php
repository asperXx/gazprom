<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
use DB;

class BlogController extends Controller
{

    public function index(Request $request, $id)
    {
        $posts = Blog::orderBy('created_at', 'desc')->get();
        $likes = DB::table('likes')->where('user_id', $request->get('user'))->get();
        return response()->json(compact('posts', 'likes'));
    }

    public function store(Request $request)
    {
        $post = new Blog;
        $post->title = $request->title;
        $post->body = $request->body;
        $post->description = "";
        $post->status = 0;
        $post->user_id = $request->user_id;

        $post->save();
    }

    public function show($id)
    {
        $post = Blog::where('id', $id)->get();

        $likes = DB::table('likes')->where('post_id', $id)->get();

        return response()->json(compact('post', 'likes'));
    }

    public function update($id, Request $request)
    {
        DB::table('blogs')->where('id', $id)->update(['title' => $request->get('title'), 'body' => $request->get('body')]);
    }

    public function destroy($id)
    {
        Blog::where('id', $id)->delete();
    }

    public function like(Request $request) {
        DB::table('likes')->insert(['user_id' => $request->get('user'), 'post_id' => $request->get('post')]);
    }
}
