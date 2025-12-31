import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingBag, MessageCircle, Star } from 'lucide-react';

export default function ProductDetail({ productId, onBack }) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const PHONE_NUMBER = "628125110790"; // Nomor WA Penjual

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                // Panggil API Detail yang baru kita buat
                const response = await fetch(`/api/products/${productId}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error("Gagal ambil detail:", error);
                setLoading(false);
            }
        };

        fetchDetail();
    }, [productId]);

    const handleWhatsAppOrder = () => {
        if (!product) return;
        const message = `Halo, saya tertarik memesan *${product.name}*. Apakah masih tersedia?`;
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50">
                <div className="text-teal-600 font-bold animate-pulse">Memuat data produk...</div>
            </div>
        );
    }

    if (!product) {
        return <div className="p-10 text-center">Produk tidak ditemukan.</div>;
    }

    return (
        <div className="min-h-screen bg-stone-50 font-sans text-stone-800 animate-fade-in">
            {/* Navbar Sederhana */}
            <nav className="bg-teal-700 p-4 shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center">
                    <button 
                        onClick={onBack} 
                        className="flex items-center text-white hover:text-amber-400 transition"
                    >
                        <ArrowLeft className="w-6 h-6 mr-2" />
                        Kembali ke Katalog
                    </button>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200 lg:flex">
                    
                    {/* Bagian Gambar */}
                    <div className="lg:w-1/2 h-96 lg:h-auto bg-stone-200 relative">
                         <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bagian Informasi */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="uppercase tracking-wide text-sm text-teal-600 font-bold mb-2">
                            {product.category}
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
                            {product.name}
                        </h1>
                        
                        <div className="flex items-center mb-6">
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <span className="ml-2 text-stone-500 text-sm">(Produk Unggulan)</span>
                        </div>

                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="flex items-center justify-between border-t border-stone-100 pt-8 mt-auto">
                            <div>
                                <p className="text-sm text-stone-500">Harga</p>
                                <p className="text-3xl font-bold text-teal-700">
                                    Rp {Number(product.price).toLocaleString('id-ID')}
                                </p>
                            </div>
                            <button 
                                onClick={handleWhatsAppOrder}
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transform hover:-translate-y-1 transition flex items-center"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Pesan Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}