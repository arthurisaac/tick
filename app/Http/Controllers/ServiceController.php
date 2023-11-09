<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index() {
        $url = "http://localhost:8000";
        return Inertia::render('Services', [
            'url'=> $url
        ]);
    }
}
