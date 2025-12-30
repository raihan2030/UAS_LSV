import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../css/app.css' // <--- UBAH INI (dari './index.css' menjadi '../css/app.css')

// Perhatikan: Kamu menggunakan ID 'root' di sini
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)