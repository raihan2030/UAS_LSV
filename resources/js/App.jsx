import ProductDetail from './ProductDetail'; // <--- Tambahkan ini
import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Phone, Instagram, MapPin, Scissors, Star, ArrowRight, Eye } from 'lucide-react';

// --- KONFIGURASI WARNA & DATA ---
// Primary: teal-600 (#0d9488) -> Air Sungai Martapura
// Secondary: amber-600 (#d97706) -> Aksen Emas/Mewah
// Background: stone-50 (#fafaf9) -> Putih Gading

const PHONE_NUMBER = "628125110790";

// Mock Data (Nantinya ini yang diambil dari Backend Docker kamu)
// Mock Data Diperbarui (15 Produk)
const INITIAL_PRODUCTS = [];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  // State baru untuk menyimpan ID produk yang sedang dilihat
  const [selectedProductId, setSelectedProductId] = useState(null);

  // FETCH DATA DARI API LARAVEL
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Mengambil data dari API...");
        
        // Panggil endpoint yang sudah Anda tes tadi
        const response = await fetch('/api/products'); 
        
        // Cek jika response tidak oke (misal error 500 atau 404)
        if (!response.ok) {
            throw new Error('Gagal mengambil data dari server');
        }

        // Ubah data JSON dari server menjadi objek JavaScript
        const data = await response.json();
        
        // Simpan data ke state React agar tampil di layar
        setProducts(data);
        console.log("Data berhasil dimuat:", data);

      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleWhatsAppOrder = (productName) => {
    const message = `Halo, saya tertarik memesan ${productName} yang ada di katalog website. Apakah masih tersedia?`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleConsultation = () => {
    const message = `Halo, saya ingin konsultasi untuk pembuatan Sasirangan Custom (Motif/Warna khusus). Boleh minta infonya?`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (selectedProductId) {
    return (
        <ProductDetail 
            productId={selectedProductId} 
            onBack={() => setSelectedProductId(null)} 
        />
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-teal-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="bg-stone-50 p-2 rounded-full">
                <Scissors className="h-6 w-6 text-teal-700" />
              </div>
              <span className="text-stone-50 font-bold text-2xl tracking-wider">
                BELLA<span className="text-amber-400">SASIRANGAN</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-stone-100 hover:text-amber-400 transition px-3 py-2 rounded-md font-medium">Beranda</a>
                <a href="#catalog" className="text-stone-100 hover:text-amber-400 transition px-3 py-2 rounded-md font-medium">Katalog</a>
                <a href="#custom" className="text-stone-100 hover:text-amber-400 transition px-3 py-2 rounded-md font-medium">Custom Order</a>
                <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full font-bold transition shadow-md">
                  Hubungi Kami
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-stone-100 hover:bg-teal-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-teal-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-stone-100 block px-3 py-2 rounded-md text-base font-medium">Beranda</a>
              <a href="#catalog" className="text-stone-100 block px-3 py-2 rounded-md text-base font-medium">Katalog</a>
              <a href="#custom" className="text-stone-100 block px-3 py-2 rounded-md text-base font-medium">Custom Order</a>
              <a href="#contact" className="text-amber-400 block px-3 py-2 rounded-md text-base font-bold">Hubungi Kami</a>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-20">
        <div className="bg-gradient-to-br from-teal-800 to-teal-600 py-24 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden relative">
          {/* Decorative Pattern Overlay (Abstract Water/River) */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0 50 Q 25 30 50 50 T 100 50 V 100 H 0 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Keindahan Warisan <span className="text-amber-400">Sungai Martapura</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-10 max-w-2xl mx-auto">
              Menghadirkan kain Sasirangan autentik dengan sentuhan modern. 
              Tersedia ready stock dan layanan kustomisasi eksklusif.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#catalog" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-teal-900 bg-stone-50 hover:bg-stone-200 shadow-lg transition transform hover:-translate-y-1">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Lihat Katalog
              </a>
              <a href="#custom" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-amber-600 hover:bg-amber-700 shadow-lg transition transform hover:-translate-y-1">
                <Scissors className="w-5 h-5 mr-2" />
                Pesan Custom
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES / VALUE PROP --- */}
      <section className="py-12 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 mx-auto bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Kualitas Premium</h3>
              <p className="text-stone-600">Bahan kain pilihan mulai dari katun hingga sutra dengan pewarna berkualitas tinggi.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Buatan Tangan</h3>
              <p className="text-stone-600">Setiap motif dibuat secara manual (handmade) oleh pengrajin lokal berpengalaman.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mx-auto bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Konsultasi Desain</h3>
              <p className="text-stone-600">Diskusikan keinginan motif dan warna Anda langsung dengan pengrajin kami.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CATALOG SECTION --- */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-teal-800 sm:text-4xl">
              Koleksi Ready Stock
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Pilih dari koleksi terbaik kami yang siap dikirim hari ini.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-stone-200 flex flex-col">
                
                {/* --- Bagian Gambar --- */}
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                    {product.category}
                  </div>
                </div>

                {/* --- Bagian Info & Tombol --- */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-stone-800 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-stone-500 mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>
                  
                  {/* Harga */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                    <span className="text-xl font-bold text-teal-700">
                      Rp {Number(product.price).toLocaleString('id-ID')}
                    </span>
                  </div>

                  {/* --- DUA TOMBOL BARU DISINI --- */}
                  <div className="flex gap-2 mt-4">
                    {/* Tombol Detail */}
                    <button 
                      onClick={() => setSelectedProductId(product.id)}
                      className="flex-1 bg-stone-200 text-stone-700 py-2 px-4 rounded-lg hover:bg-stone-300 transition flex items-center justify-center gap-2 font-bold text-sm"
                    >
                      <Eye className="w-4 h-4" /> Detail
                    </button>

                    {/* Tombol Beli (WA) */}
                    <button 
                      onClick={() => handleWhatsAppOrder(product.name)}
                      className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2 font-bold text-sm"
                    >
                      <ShoppingBag className="w-4 h-4" /> Beli
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CUSTOM ORDER SECTION --- */}
      <section id="custom" className="py-16 bg-stone-900 text-stone-50 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-72 h-72 bg-teal-600 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                Ingin Motif atau Warna Khusus? <br/>
                <span className="text-amber-400">Buat Sasirangan Impianmu.</span>
              </h2>
              <p className="text-lg text-stone-300 mb-8">
                Kami memahami bahwa seni adalah ekspresi diri. Jika Anda tidak menemukan apa yang Anda cari di katalog, kami menerima pesanan custom (Pre-Order).
                Anda bisa memilih kain, kombinasi warna, dan motif sesuai keinginan.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center mr-3">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-stone-300">Konsultasi gratis via WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center mr-3">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-stone-300">Pengerjaan 3-7 hari (tergantung kerumitan)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center mr-3">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-stone-300">Update progres pengerjaan berkala</span>
                </li>
              </ul>

              <button 
                onClick={handleConsultation}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-stone-900 bg-amber-500 hover:bg-amber-400 shadow-xl transition transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Sekarang
              </button>
            </div>
            
            <div className="relative">
               {/* Visual representation of custom work */}
               <div className="aspect-w-3 aspect-h-2 rounded-2xl bg-gradient-to-tr from-teal-800 to-stone-800 p-8 flex items-center justify-center border border-stone-700 shadow-2xl">
                  <div className="text-center">
                    <img className="rounded-2xl" src="/images/custom-order.jpeg" alt="" />
                    {/* <Scissors className="w-20 h-20 text-stone-500 mx-auto mb-4" />
                    <p className="text-stone-400 font-mono text-sm">Custom Work Area</p>
                    <p className="text-stone-500 text-xs mt-2">Dyeing & Patterning Process</p> */}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Info */}
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-6 w-6 text-teal-700" />
                <span className="text-stone-900 font-bold text-xl">
                  BELLA<span className="text-amber-600">SASIRANGAN</span>
                </span>
              </div>
              <p className="text-stone-500 text-sm">
                Melestarikan budaya Banjar melalui helai kain Sasirangan berkualitas tinggi. Dibuat dengan cinta dari Kalimantan Selatan.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-stone-900 mb-4">Navigasi</h4>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li><a href="#home" className="hover:text-teal-600">Beranda</a></li>
                <li><a href="#catalog" className="hover:text-teal-600">Katalog</a></li>
                <li><a href="#custom" className="hover:text-teal-600">Custom Order</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-stone-900 mb-4">Kontak</h4>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-teal-600" />
                  +62 812 5110 790
                </li>
                <li className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2 text-teal-600" />
                  @bella.sasirangan
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-teal-600" />
                  Banjarmasin, Kalsel
                </li>
              </ul>
            </div>
            
            {/* Maps / Additional Info */}
            <div>
              <h4 className="font-bold text-stone-900 mb-4">Lokasi</h4>
              <div className="w-full h-32 bg-stone-200 rounded-lg flex items-center justify-center text-stone-500 text-xs">
                [Google Maps Placeholder]
              </div>
            </div>

          </div>

          <div className="border-t border-stone-200 pt-8 text-center text-stone-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Bella Sasirangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}