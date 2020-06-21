<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ticket;
use App\User;
use DB;

class TicketController extends Controller
{

    public function index()
    {
        $tickets = Ticket::orderBy('created_at', 'desc')->get();
        $id_array = [];
        $users = [];

        for ($i = 0; $i < count($tickets); $i++) {
            array_push($id_array, $tickets[$i]->user_id);
        }

        // dd($id_array);

        for ($i = 0; $i < count($id_array); $i++) {
            array_push($users, User::where('id', $id_array[$i])->get());
        }

        return response()->json(compact('tickets', 'users'));
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $ticket = new Ticket;
        $ticket->title = $request->title;
        $ticket->body = $request->body;
        $ticket->status = $request->status;
        $ticket->department = $request->dep;
        $ticket->flames = 0;
        $ticket->user_id = $request->user_id;

        $ticket->save();
    }

    public function show($id)
    {
        $ticket = Ticket::where('id', $id)->get();
        $users = [];

        $comments = DB::table('ticket_comments')->where('ticket_id', $id)->get();

        for ($i = 0; $i < count($comments); $i++) {
            array_push($users, User::where('id', $comments[$i]->user_id)->get());
        }

        // dd($comments);
        return response()->json(compact('ticket', 'comments', 'users'));
    }

    public function getUser($id) {
        $user = User::where('id', $id)->get();
        return response()->json()->compact('user');
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        Ticket::where('id', $id)->delete();
    }

    public function like(Request $request) {

        $user_id = $request->get('user_id');
        $ticket_id = $request->get('ticket_id');
        
        // $author_id = $request->get('')

        Ticket::where('id', $ticket_id)->increment('flames');

        User::where('id', $user_id)->decrement('flames');

        Ticket::where('id', $ticket_id)->update(['clicked' => 1]);

        $user = User::where('id', $user_id)->get();
        return response()->json(compact('user'));
    }

    public function comment(Request $request) {
        $comment = $request->get('comment');
        $user = $request->get('user');
        $ticket_id = $request->get('ticket_id');

        DB::table('ticket_comments')->insert(['ticket_id' => $ticket_id, 'user_id' => $user['id'], 'comment' => $comment]);
    }
}
