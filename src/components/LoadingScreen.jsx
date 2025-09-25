import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import { isArgentina } from '@/constans/country';

const getCountry = () => (isArgentina() ? 'ar' : 'mx');

const advicesAR = [
  "Nueva forma de comprar.",
  "Encontrá lo que necesitás, fácil.",
  "Promos claras, sin vueltas.",
  "Buscá, compará y elegí mejor.",
  "Descuentos reales, sin esfuerzo.",
  "Tu compra más clara.",
  "Todo en un solo lugar.",
  "Comprás con más control.",
  "Más simple, más transparente.",
  "Comprá sabiendo lo que ahorrás.",
  "Promos pensadas para vos."
];

const advicesMX = [
  "Nueva forma de comprar.",
  "Encuentra lo que necesitas, fácil.",
  "Promos claras, sin rodeos.",
  "Busca, compara y decide fácil.",
  "Descuentos reales, sin esfuerzo.",
  "Tu compra más clara.",
  "Todo en un solo lugar.",
  "Compra con más control.",
  "Más simple, más transparente.",
  "Compra sabiendo lo que ahorras.",
  "Promos pensadas para ti."
];


const LoadingScreen = () => {
  const [adviceIndex, setAdviceIndex] = useState(0);
  const [country, setCountry] = useState(getCountry());

  // Update country if localStorage changes (from another tab or window)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'country') {
        setCountry(getCountry());
        setAdviceIndex(0);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Also update country if it changes in this tab
  useEffect(() => {
    const interval = setInterval(() => {
      const current = getCountry();
      setCountry((prev) => {
        if (prev !== current) {
          setAdviceIndex(0);
          return current;
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const advices = country === 'ar' ? advicesAR : advicesMX;

  useEffect(() => {
    const interval = setInterval(() => {
      setAdviceIndex((prev) => (prev + 1) % advices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [advices.length]);

  return (
    <div className="loading-screen">
      <h1 className="loading-title">
        <img src="/flash.png" alt="Flash" className="flash-icon" />
        Ofertas relámpago
      </h1>
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="spinner-left"></div>
          <div className="spinner-right"></div>
        </div>
        <img src="/mercadito_logo.png" alt="Mercadito Logo" className="logo" />
      </div>
      <div className="advice">{advices[adviceIndex]}</div>
    </div>
  );
};

export default LoadingScreen; 