import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LanguageProvider } from '../src/components/Lenguaje/LanguageContext'; // ✅ Importa el contexto global

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider> {/* ✅ Envuelve toda tu app */}
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

// Si querés medir el rendimiento
reportWebVitals();
