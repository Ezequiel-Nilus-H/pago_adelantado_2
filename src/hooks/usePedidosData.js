import { useState, useEffect } from 'react';
import { googleSheetsService } from '../lib/googleSheets.js';

export const usePedidosData = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataSource, setDataSource] = useState('local'); // Track data source

  useEffect(() => {
    const loadPedidos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to load from Google Sheets first, fallback to local CSV
        const pedidosData = await googleSheetsService.fetchPedidos();
        
        setPedidos(pedidosData);
        setDataSource('google-sheets');
        setLoading(false);
      } catch (err) {
        console.error('Error loading pedidos:', err);
        setError(err.message);
        setDataSource('error');
        setLoading(false);
      }
    };

    loadPedidos();
  }, []);

  const getPedidoById = (id) => {
    return pedidos.find(pedido => pedido.id === id);
  };

  return { pedidos, loading, error, getPedidoById, dataSource };
};
