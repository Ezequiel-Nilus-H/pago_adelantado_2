import React from 'react';

const PedidoNotFound = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#f5f5f5' }}>
      {/* Green Header */}
      <div style={{
        height: '60px',
        backgroundColor: '#4aa35e',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <a 
          href="https://el-mercadito.co/en-US/ar" 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <img 
            src="/mercadito_logo.png" 
            alt="Mercadito Logo" 
            style={{ 
              height: '40px', 
              width: 'auto',
              objectFit: 'contain',
              cursor: 'pointer'
            }} 
          />
        </a>
        <div style={{ width: '40px' }}></div>
      </div>

      {/* Error Content */}
      <div style={{
        padding: '16px',
        height: 'calc(100vh - 96px)',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        
        {/* Error Icon */}
        <div style={{
          fontSize: '64px',
          marginBottom: '20px'
        }}>
          ❌
        </div>

        {/* Error Title */}
        <h1 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#e74c3c',
          marginBottom: '16px'
        }}>
          Pedido No Encontrado
        </h1>

        {/* Error Message */}
        <p style={{
          fontSize: '16px',
          color: '#666',
          marginBottom: '24px',
          maxWidth: '400px',
          lineHeight: '1.5'
        }}>
          El pedido que estás buscando no existe o el enlace es incorrecto.
        </p>

        {/* Action Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button 
            onClick={() => window.location.href = 'https://el-mercadito.co/en-US/ar'}
            style={{
              padding: '12px 24px',
              backgroundColor: '#4aa35e',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#3d8b4f';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#4aa35e';
            }}
          >
            Ir a Mercadito
          </button>
        </div>

        {/* Help Text */}
        <div style={{
          marginTop: '32px',
          padding: '16px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          maxWidth: '500px'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '0',
            lineHeight: '1.4'
          }}>
            <strong>¿Necesitas ayuda?</strong><br/>
            Si crees que esto es un error, contacta a nuestro equipo de soporte 
            o verifica que el enlace del pedido sea correcto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PedidoNotFound;
