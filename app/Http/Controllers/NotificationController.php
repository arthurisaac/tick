<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index() {
        return Inertia::render('Notification', [
            //'notifications' => auth()->user()->readNotifications,
        ]);
    }

    public function markAsRead(){
        auth()->user()->unreadNotifications->markAsRead();
        return redirect()->back();
    }
}
