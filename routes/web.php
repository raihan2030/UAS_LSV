<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return view('welcome');
});

// Route API: React akan memanggil URL ini ('/api/products')
Route::get('/api/products', [ProductController::class, 'index']);

// Route untuk mengambil 1 produk detail
Route::get('/api/products/{id}', [ProductController::class, 'show']);