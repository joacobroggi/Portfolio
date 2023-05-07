import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


function alertar() {
  alert('Estas viendo este sitio web desde el navegador web de instagram. Para una mejor experiencia porfavor toca los tres puntos en la esquina superior derecha y selecciona "Abrir en Chrome"');
}

if(navigator.userAgent.includes("Instagram")){
  setTimeout(() => {
    alertar();
  }, 2000);
  
}

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



