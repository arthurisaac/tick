<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceInfoController extends Controller
{
     public function index(Request $request) {
        $url = "http://localhost:8000";
        $service_id = $request->get("service");

        return Inertia::render('ServiceInfo', [
            'url'=> $url,
            'service_id'=> $service_id
        ]);
    }
}
