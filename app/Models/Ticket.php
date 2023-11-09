<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'user',
        'agence',
        'ticket_id',
        'service_id',
        'ticket',
        'service',
        'type',
        'passage',
        'code',
    ];

    public function Agence() {
        return $this->belongsTo(Agence::class,'agence');
    }
}
