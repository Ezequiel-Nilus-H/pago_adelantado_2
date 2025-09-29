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
  const { getPedidoById, loading, error } = usePedidosData();
  
  if (loading) {
    return <LoadingPedido />;
  }
  
  if (error) {
    return <PedidoNotFound />;
  }
  
  const pedido = getPedidoById(id);
  
  if (!pedido) {
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
          <Route path="/pedido/*" element={<PedidoNotFound />} />
          <Route path="*" element={<PedidoNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;