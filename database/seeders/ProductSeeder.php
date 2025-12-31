<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            // [
            //     'name' => "TES DARI SEEDER BERHASIL",  // <--- Cek nama ini nanti di Web
            //     'price' => 12345,
            //     'category' => "Tes Koneksi",
            //     'description' => "Ini adalah data bukti bahwa database terhubung ke frontend.",
            //     'image' => "/images/https://placehold.co/600x400/000000/ffffff?text=TES+KONEKSI"
            // ],
            [
                'name' => "Sasirangan Motif Gigi Haruan",
                'price' => 150000,
                'category' => "Kain",
                'description' => "Motif klasik yang melambangkan ketajaman berpikir. Bahan katun satin premium.",
                'image' => "/images/gigi-haruan.jpeg"
            ],
            [
                'name' => "Sasirangan Hiris Gagatas",
                'price' => 175000,
                'category' => "Kain",
                'description' => "Warna merah marun kombinasi kuning. Cocok untuk acara formal.",
                'image' => "/images/hiris-gagatas.jpeg"
            ],
            [
                'name' => "Kemeja Pria Sasirangan",
                'price' => 250000,
                'category' => "Pakaian Jadi",
                'description' => "Kemeja siap pakai, ukuran L. Motif modern kombinasi.",
                'image' => "/images/kemeja-sasirangan.jpeg"
            ],
            [
                'name' => "Selendang Sasirangan Sutra",
                'price' => 300000,
                'category' => "Aksesoris",
                'description' => "Bahan sutra asli, sangat lembut dan mewah. Pewarnaan alami.",
                'image' => "/images/selendang-sutra.jpeg"
            ],
            [
                'name' => "Sasirangan Kambang Kacang",
                'price' => 160000,
                'category' => "Kain",
                'description' => "Simbol keakraban. Warna hijau tosca cerah dengan aksen putih.",
                'image' => "/images/kambang-kacang.jpeg"
            ],
            [
                'name' => "Sasirangan Bayam Raja",
                'price' => 180000,
                'category' => "Kain",
                'description' => "Motif untuk para pemimpin. Warna ungu tua yang elegan dan berwibawa.",
                'image' => "/images/bayam-raja.jpeg"
            ],
            [
                'name' => "Blouse Wanita Sasirangan",
                'price' => 200000,
                'category' => "Pakaian Jadi",
                'description' => "Atasan wanita modern cocok untuk ke kantor. Ukuran All Size.",
                'image' => "/images/blouse-wanita.jpeg"
            ],
            [
                'name' => "Sasirangan Kulit Kayu",
                'price' => 145000,
                'category' => "Kain",
                'description' => "Tekstur motif menyerupai serat kayu alami. Warna coklat bumi.",
                'image' => "/images/kulit-kayu.jpeg"
            ],
            [
                'name' => "Sasirangan Naga Balimbur",
                'price' => 190000,
                'category' => "Kain",
                'description' => "Motif penuh makna filosofis tentang perjalanan hidup. Warna biru laut.",
                'image' => "/images/naga-balimbur.jpeg"
            ],
            [
                'name' => "Tas Tote Bag Sasirangan",
                'price' => 75000,
                'category' => "Aksesoris",
                'description' => "Tas belanja ramah lingkungan dengan perca kain Sasirangan.",
                'image' => "/images/tote-bag.jpeg"
            ],
            [
                'name' => "Masker Kain 3 Lapis",
                'price' => 15000,
                'category' => "Aksesoris",
                'description' => "Masker non-medis motif Sasirangan, bisa dicuci ulang.",
                'image' => "/images/masker-kain.jpeg"
            ],
            [
                'name' => "Sasirangan Jajumputan",
                'price' => 130000,
                'category' => "Kain",
                'description' => "Motif jumputan (ikat celup) dengan warna-warni pelangi ceria.",
                'image' => "/images/jajumputan.jpeg"
            ],
            [
                'name' => "Kaos Sasirangan Casual",
                'price' => 100000,
                'category' => "Pakaian Jadi",
                'description' => "Kaos katun combed 30s dengan sablon motif Sasirangan di dada.",
                'image' => "/images/kaos-casual.jpeg"
            ],
            [
                'name' => "Dompet Pouch Sasirangan",
                'price' => 45000,
                'category' => "Aksesoris",
                'description' => "Dompet serbaguna untuk kosmetik atau uang receh.",
                'image' => "/images/dompet-pouch.jpeg"
            ],
            [
                'name' => "Sasirangan Ombak Sinapur Karang",
                'price' => 165000,
                'category' => "Kain",
                'description' => "Motif ombak yang dinamis. Perpaduan warna gradasi biru dan putih.",
                'image' => "/images/ombak-sinampur.jpeg"
            ]
        ];

        DB::table('products')->insert($products);
    }
}