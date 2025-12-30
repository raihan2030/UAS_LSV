<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('products')->insert([
            [
                'name' => 'Sasirangan Motif Gigi Haruan',
                'price' => 150000,
                'deskripsi' => 'Motif klasik yang melambangkan ketajaman berpikir. Bahan katun satin premium yang nyaman dipakai seharian.',
                'image' => 'https://placehold.co/600x400/0d9488/ffffff?text=Gigi+Haruan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sasirangan Hiris Gagatas',
                'price' => 175000,
                'deskripsi' => 'Warna merah marun kombinasi kuning yang elegan. Sangat cocok untuk acara formal maupun santai.',
                'image' => 'https://placehold.co/600x400/9f1239/ffffff?text=Hiris+Gagatas',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kemeja Pria Sasirangan',
                'price' => 250000,
                'deskripsi' => 'Kemeja siap pakai ukuran L dengan jahitan rapi. Motif modern kombinasi warna maskulin.',
                'image' => 'https://placehold.co/600x400/1e293b/ffffff?text=Kemeja+Pria',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Selendang Sasirangan Sutra',
                'price' => 300000,
                'deskripsi' => 'Bahan sutra asli, sangat lembut dan mewah. Pewarnaan alami.',
                'image' => 'https://placehold.co/600x400/1e293b/ffffff?text=Kemeja+Pria',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}