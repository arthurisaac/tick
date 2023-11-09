<?php

namespace App\Http\Controllers;

use App\Models\Agence;
use App\Models\Ticket;
use App\Models\User;
use App\Notifications\AlmostArrived;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketInfoController extends Controller
{
    public function index(Request $request) {
        //$url = "http://localhost:8000";
        $service = $request->get("service");
        $numero = $request->get("numero");
        $passage = $request->get("passage");
        $average = $request->get("average");
        $ticket = $request->get("ticket");

        $agence = Agence::query()->find($request->get("agence"));

        return Inertia::render('TicketInfo', [
            //'url'=> $url,
            'service'=> $service,
            'numero'=> $numero,
            'passage'=> $passage,
            'average'=> $average,
            'agence'=> $agence,
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'agence' => 'required',
            'service_id' => 'required',
        ]);

        $agence = Agence::query()->find($request->get("agence"))->first();
        if ($agence) {
            $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => $agence->url . '/api/tickets/',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => 'service_id='.$request->get('service_id'),
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/x-www-form-urlencoded'
            ),
            ));

            $response = curl_exec($curl);

            $decoded = json_decode($response, true);

            $service_id = $decoded["service_id"];
            $ticket_id = $decoded["ticket_id"];
            
            $numero = $decoded["numero"];
            $service = $decoded["service"];

            $newTicket = new Ticket([
                "service_id"=> $service_id,
                "ticket_id"=> $ticket_id,
                "service" => $service,
                "ticket" => $numero,
                "type" => "now",
                "agence" => $agence->id,
                "user" => auth()->user()->id,
                "passage" => Carbon::parse($decoded['passage'])

            ]);
            $newTicket->save();

            User::find(auth()->user()->id)->notify(new AlmostArrived($newTicket));

            return to_route('ticket.info', [
                "passage" => $decoded['passage'], 
                "average" => $decoded['average'], 
                "service" => $service,
                "numero" => $numero,
            ]);
        }

        return redirect()->back()->with("error","Agence introuvable");
    }
}
