<?php

use App\Http\Controllers\AgenceController;
use App\Http\Controllers\AgencyController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ServiceInfoController;
use App\Http\Controllers\TicketInfoController;
use App\Http\Controllers\TicketTimeController;
use App\Http\Controllers\UserTicketController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('auth/google', [GoogleAuthController::class,'redirect'])->name('google.auth');
Route::get('auth/google/call-back', [GoogleAuthController::class,'callbackGoogle'])->name('google.callback');

Route::middleware('auth')->group(function () {
    Route::get('/agencies', [AgenceController::class, 'index'])->name('agences.choix');
    Route::get('/services', [ServiceController::class, 'index'])->name('services.choix');
    Route::get('/service-information', [ServiceInfoController::class, 'index'])->name('services.info');
    Route::get('/ticket-information', [TicketInfoController::class, 'index'])->name('ticket.info');
    Route::get('/ticket-in-time', [TicketTimeController::class, 'index'])->name('ticket.in-time');
    Route::get('/ticket-in-time-success', [TicketTimeController::class, 'index'])->name('ticket.in-time-success');
    //
    Route::post('/ticket-information', [TicketInfoController::class, 'store'])->name('ticket.new');
    Route::post('/ticket-in-time', [TicketTimeController::class, 'success'])->name('ticket.save-in-time');

    Route::get('/follow-the-progress', function () {
        return Inertia::render('FollowTheProgress');
    })->name('follow-the-progress');

    Route::get('/tickets-user', [UserTicketController::class, 'index'])->name('tickets.user');
    Route::get('/ticket-user-info', [UserTicketController::class, 'show'])->name('tickets.info');
    
    Route::get('/notifications', [NotificationController::class, 'index'])->name('notifications.all');
    Route::get('/mark-as-read', [NotificationController::class, 'markAsRead'])->name('markAsRead');
});

require __DIR__.'/auth.php';
