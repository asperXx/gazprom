<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
use DB;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $id)
    {
        // dd($request->get('user'));
        $posts = Blog::orderBy('created_at', 'desc')->get();
        $likes = DB::table('likes')->where('user_id', $request->get('user'))->get();
        return response()->json(compact('posts', 'likes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($title)
    {
        $post = Blog::where('title', $title)->get();

        $likes = DB::table('likes')->where('post_id', $title)->get();

        // dd(response()->json(compact('post', 'likes')));
        return response()->json(compact('post', 'likes'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($title)
    {
        Blog::where('title', $title)->delete();
    }

    public function like(Request $request) {
        // dd($request->get('user'));
        DB::table('likes')->insert(['user_id' => $request->get('user'), 'post_id' => $request->get('post')]);
    }
}
