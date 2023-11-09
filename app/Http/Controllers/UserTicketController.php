<?php

namespace App\Http\Controllers;

use App\Models\Agence;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserTicketController extends Controller
{
    public function index(Request $request) {

        $tickets = Ticket::with('Agence')->where("user", auth()->user()->id)->get();  
        return Inertia::render('UserTickets', [
            'tickets'=> $tickets
        ]);    
    }
    public function show(Request $request) {
        $request->validate([
            'ticket'=> 'required|numeric',
        ]);

        $ticket = Ticket::query()->find($request->get('ticket'));
        $agence = Agence::query()->find($ticket->agence);

        return Inertia::render('UserTicketInfo', [
            'ticket'=> $ticket,
            'agence'=> $agence,
        ]);    
    }
}
