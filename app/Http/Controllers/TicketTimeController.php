<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketTimeController extends Controller
{
    public function index(Request $request) {
        $url = "http://localhost:8000";

        return Inertia::render('TicketTime', [
            'url'=> $url,
            'service_id' => $request->get('service_id'),
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'service_id'=> 'required',
            //'hour'=> 'required|numeric',
            //'minute'=> 'required|numeric',
            'time'=> 'required',
            'url'=> 'required',
        ]);
        $post = [
            'service_id' => $request->get('service_id'),
            'time' => $request->get('time'),
            //'hour' => $request->get('hour'),
            //'minute' => $request->get('minute'),
            'user' => Auth::user()->id,
        ];

        $ch = curl_init($request->url . '/api/save-time-ticket');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);

        // execute!
        curl_exec($ch);

        // close the connection, release resources used
        curl_close($ch);

        // do anything you want with your response
        return to_route('ticket.in-time-success');
    }

    public function success(Request $request) {

        return Inertia::render('TicketTimeSuccess', []);    
    }
}
