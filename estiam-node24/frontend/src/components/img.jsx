import React from 'react';

export default function Img() {
  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={containerStyle}>
      <img src='https://cdn.pixabay.com/photo/2020/10/01/17/11/store-5619201_1280.jpg' alt='Image de livres' />
      <div style={textStyle}>
        <p>"Bienvenue dans notre Sanctuaire de Gestion de Stock" 
        </p>
      </div>
    </div>
  );
}
