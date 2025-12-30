<?php

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
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            // String untuk nama produk
            $table->string('name');
            
            // Decimal total 10 digit, dengan 0 digit di belakang koma (sesuai request "tanpa koma")
            $table->decimal('price', 10, 0); 
            
            // Text untuk deskripsi panjang
            $table->text('deskripsi'); 
            
            // String untuk URL/path gambar
            $table->string('image')->nullable(); // Saya beri nullable jaga-jaga kalau gambar belum diupload
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
