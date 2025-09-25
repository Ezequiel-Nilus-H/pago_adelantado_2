import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './screens/Home';
import PedidoDetail from './components/PedidoDetail';
import PedidoNotFound from './components/PedidoNotFound';
import LoadingPedido from './components/LoadingPedido';
import { usePedidosData } from './hooks/usePedidosData';
import './App.css';

const PedidoPage = () => {
  const { id } = useParams();
  const { getPedidoById, loading, error, pedidos } = usePedidosData();
  
  // Debug logging (remove in production)
  console.log('PedidoPage - ID:', id);
  console.log('PedidoPage - Loading:', loading);
  console.log('PedidoPage - Error:', error);
  console.log('PedidoPage - Available pedidos:', pedidos.length);
  
  if (loading) {
    return <LoadingPedido />;
  }
  
  if (error) {
    console.error('Error loading pedidos:', error);
    return <PedidoNotFound />;
  }
  
  const pedido = getPedidoById(id);
  console.log('PedidoPage - Found pedido:', pedido);
  
  if (!pedido) {
    console.log('PedidoPage - No pedido found for ID:', id);
    return <PedidoNotFound />;
  }
  
  return <PedidoDetail pedido={pedido} />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PedidoNotFound />} />
          <Route path="/pedido/:id" element={<PedidoPage />} />
          <Route path="/pedido/*" element={<PedidoPage />} />
          <Route path="*" element={<PedidoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;