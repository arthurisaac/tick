<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AgencyController extends Controller
{
    public function index() {
        return Inertia::render('Agences', [
            'status' => session('status'),
        ]);
    }
}
