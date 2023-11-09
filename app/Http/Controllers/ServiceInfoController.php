<?php

namespace App\Http\Controllers;

use App\Models\Agence;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceInfoController extends Controller
{
     public function index(Request $request) {
        $service_id = $request->get("service");
        $agence = Agence::query()->find($request->get("agence"));

        return Inertia::render('ServiceInfo', [
            'agence'=> $agence,
            'service_id'=> $service_id
        ]);
    }
}
