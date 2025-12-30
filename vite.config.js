import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; // 1. Wajib ada untuk React

export default defineConfig({
    plugins: [
        laravel({
            // 2. Ubah app.js ke app.jsx agar support JSX dari entry point
            input: ['resources/css/app.css', 'resources/js/main.jsx'], 
            refresh: true,
        }),
        react(), // 3. Panggil plugin React di sini
    ],
    // Bagian server watch ini opsional, bawaan Laravel sudah cukup pintar, 
    // tapi kalau mau disimpan tidak masalah.
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});