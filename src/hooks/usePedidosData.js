import { useState, useEffect } from 'react';

export const usePedidosData = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Helper function to parse CSV line handling quoted values
    const parseCSVLine = (line) => {
      const result = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          result.push(current);
          current = '';
        } else {
          current += char;
        }
      }
      
      result.push(current);
      return result;
    };

    const loadPedidos = async () => {
      try {
        const response = await fetch('/pedidos.csv');
        const csvText = await response.text();
        
        // Parse CSV
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        const pedidosData = [];
        
        for (let i = 1; i < lines.length; i++) {
          if (lines[i].trim()) {
            const values = parseCSVLine(lines[i]);
            const pedido = {};
            headers.forEach((header, index) => {
              pedido[header.trim()] = values[index]?.trim() || '';
            });
            pedidosData.push(pedido);
          }
        }
        
        setPedidos(pedidosData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadPedidos();
  }, []);

  const getPedidoById = (id) => {
    return pedidos.find(pedido => pedido.id === id);
  };

  return { pedidos, loading, error, getPedidoById };
};
