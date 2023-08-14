import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header title="Notes App" />
    <App />    
    <Footer />
  </React.StrictMode>
);


