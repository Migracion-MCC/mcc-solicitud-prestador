import React from 'react';
import './Loader.css';

interface LoaderProps {
  show: boolean; // Propiedad para controlar si el loader se muestra
}

const Loader: React.FC<LoaderProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;
