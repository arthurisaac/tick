<?php

namespace App\Http\Controllers;

use App\Models\Agence;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index(Request $request) {

        $agence = Agence::query()->find($request->get("agence"));
        return Inertia::render('Services', [
            'agence'=> $agence,
        ]);
    }
}
