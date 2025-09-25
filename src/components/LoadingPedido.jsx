import React from 'react';

const LoadingPedido = () => {
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

      {/* Loading Content */}
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
        
        {/* Loading Spinner */}
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #4aa35e',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '20px'
        }}></div>

        {/* Loading Text */}
        <h2 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#333',
          marginBottom: '8px'
        }}>
          Cargando pedido...
        </h2>

        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: '0'
        }}>
          Por favor espera mientras obtenemos la información de tu pedido.
        </p>

        {/* CSS Animation */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default LoadingPedido;
