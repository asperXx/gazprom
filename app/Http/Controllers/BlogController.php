<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
use DB;
use App\User;

class BlogController extends Controller
{

    public function index(Request $request, $id)
    {
        $posts = Blog::orderBy('created_at', 'desc')->paginate(5);
        // dd($posts);

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

        if($post->save()) {
            $count = count(Blog::where('user_id', $request->user_id)->get());
            
            if ($count == 3) {
                DB::table('users_medals')->where('id', $request->user_id)->insert(['user_id' => $request->user_id, 'medal_id' => '1']);
            }
        }
    }

    public function show($id)
    {
        $users = [];

        $comments = DB::table('post_comments')->where('post_id', $id)->get();

        for ($i = 0; $i < count($comments); $i++) {
            array_push($users, User::where('id', $comments[$i]->user_id)->get());
        }

        $post = Blog::where('id', $id)->get();

        $likes = DB::table('likes')->where('post_id', $id)->get();

        return response()->json(compact('post', 'likes', 'comments', 'users'));
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

    public function comment(Request $request) {
        $comment = $request->get('comment');
        $user = $request->get('user');
        $post_id = $request->get('post_id');

        DB::table('post_comments')->insert(['post_id' => $post_id, 'user_id' => $user['id'], 'comment' => $comment]);
    }

}
