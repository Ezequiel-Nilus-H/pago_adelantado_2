import React from 'react';

const PedidoDetail = ({ pedido }) => {
  if (!pedido) return null;

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#f5f5f5', overflow: 'hidden' }}>
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

      {/* Order Summary Content */}
      <div style={{
        padding: '16px',
        height: 'calc(100vh - 76px)',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        
        {/* Order and Delivery Details */}
        <div style={{
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '12px',
          marginBottom: '12px',
          flex: '0 0 auto'
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#333'
          }}>Detalles del Pedido</h2>
          
          <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              fontSize: '12px',
              color: '#666'
            }}>Dirección de envío:</span>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#333',
              textAlign: 'right',
              flex: '1',
              marginLeft: '8px'
            }}>{pedido.direccion}</span>
          </div>

          <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              fontSize: '12px',
              color: '#666'
            }}>Fecha de entrega:</span>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#333'
            }}>{pedido.fecha_entrega}</span>
          </div>

          <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              fontSize: '12px',
              color: '#666'
            }}>Horario:</span>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#333'
            }}>{pedido.horario}</span>
          </div>

          <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              fontSize: '12px',
              color: '#666'
            }}>Nro. pedido:</span>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#333'
            }}>{pedido.numero_pedido}</span>
          </div>

        </div>

        {/* Order Summary */}
        <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#333'
          }}>Resumen del pedido</h3>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
            <span style={{
              fontSize: '14px',
              color: '#666'
            }}>Total del pedido:</span>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#333'
            }}>${pedido.total_pedido}</span>
          </div>

          {/* Descuento destacado */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            padding: '8px 12px',
            backgroundColor: '#e8f5e8',
            borderRadius: '8px',
            border: '1px solid #4aa35e'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{
                fontSize: '16px'
              }}>🎉</span>
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#2d7a3d'
              }}>Descuento pago adelantado</span>
            </div>
            <span style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#2d7a3d'
            }}>-${pedido.descuento}</span>
          </div>
          
          <div style={{
            borderTop: '2px solid #e0e0e0',
            paddingTop: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <span style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#333'
            }}>Total a pagar:</span>
            <span style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#4aa35e'
            }}>${pedido.total_pagar}</span>
          </div>

          {/* Botón de pago */}
          <button style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#ffe600',
            color: '#333',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255, 230, 0, 0.3)',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#e6d100';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(255, 230, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#ffe600';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(255, 230, 0, 0.3)';
          }}
          >
            <img 
              src="/mercado-pago-logo.png" 
              alt="Mercado Pago" 
              style={{ 
                height: '20px', 
                width: 'auto',
                objectFit: 'contain'
              }} 
            />
            Pagar con Mercado Pago
          </button>

          <div style={{
            textAlign: 'center',
            marginTop: '12px',
            fontSize: '12px',
            color: '#666',
            lineHeight: '1.4'
          }}>
            ✅ Pago 100% seguro • ✅ Recibí tu pedido el día programado
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidoDetail;
