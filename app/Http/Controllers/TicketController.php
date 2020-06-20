<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ticket;
use App\User;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // dd($id);
        $tickets = Ticket::orderBy('created_at', 'desc')->get();
        return response()->json(compact('tickets'));
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
        $ticket = new Ticket;
        $ticket->title = $request->title;
        $ticket->body = $request->body;
        $ticket->status = 0;
        $ticket->department = $request->dep;
        $ticket->flames = 0;
        $ticket->user_id = $request->user_id;

        $ticket->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($title)
    {
        $ticket = Ticket::where('title', $title)->get();
        return response()->json(compact('ticket'));
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
    public function destroy($id)
    {
        Ticket::where('id', $id)->delete();
    }

    public function like(Request $request) {

        $user_id = $request->get('user_id');
        $ticket_id = $request->get('ticket_id');
        Ticket::where('id', $ticket_id)->increment('flames');
        User::where('id', $user_id)->decrement('flames');

        $user = User::where('id', $user_id)->get();
        return response()->json(compact('user'));
    }
}
