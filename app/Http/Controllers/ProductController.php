<?php

namespace App\Http\Controllers;

use App\Models\Product; // Pastikan model Product di-import
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Mengambil semua data produk untuk API
     */
    public function index()
    {
        // 1. Ambil semua data dari tabel 'products'
        // Kita urutkan dari yang terbaru biar rapi
        $products = Product::latest()->get(); 
        
        // 2. Kembalikan dalam format JSON (agar bisa dibaca React)
        return response()->json($products);
    }

    /**
     * Mengambil SATU data produk berdasarkan ID
     */
    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Produk tidak ditemukan'], 404);
        }

        return response()->json($product);
    }
}