<?php

use App\Models\Agence;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class, 'user')->nullable();
            $table->foreignIdFor(Agence::class, 'agence')->nullable();
            $table->integer('ticket_id')->nullable();
            $table->integer('service_id')->nullable();
            $table->string('ticket')->nullable();
            $table->string('service')->nullable();
            $table->enum('type', ['now', 'later'])->nullable();
            $table->dateTime('passage')->nullable();
            $table->string('code')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
