// Google Sheets service for fetching pedidos data using public CSV export

export class GoogleSheetsService {
  constructor() {
    this.sheetId = '1g9aTQ7GAmnqwuVwKBwON8nFt8FyqH6oCSdpqH5s6dYQ'
  }

  // Using public CSV export
  async fetchFromPublicCSV() {
    if (!this.sheetId) {
      throw new Error('Google Sheet ID not configured');
    }

    // Google Sheets public CSV export URL with specific gid
    const csvUrl = `https://docs.google.com/spreadsheets/d/${this.sheetId}/export?format=csv&gid=1979285894`;
    
    try {
      const response = await fetch(csvUrl);
      
      if (!response.ok) {
        throw new Error(`CSV export error: ${response.status} ${response.statusText}`);
      }
      
      const csvText = await response.text();
      return this.parseCSVData(csvText);
    } catch (error) {
      console.error('Error fetching CSV from Google Sheets:', error);
      throw error;
    }
  }

  // Parse CSV data (same logic as original hook)
  parseCSVData(csvText) {
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
        
        // Only add if the row has data (check for id or any meaningful field)
        if (pedido.id && pedido.id.trim() !== '') {
          pedidosData.push(pedido);
        }
      }
    }
    
    return pedidosData;
  }

  // Main method that tries Google Sheets first, then falls back to local CSV
  async fetchPedidos() {
    // Try Google Sheets CSV export first
    if (this.sheetId) {
      try {
        return await this.fetchFromPublicCSV();
      } catch (error) {
        console.warn('Google Sheets CSV export failed, trying local CSV...', error.message);
      }
    }

    // Fallback to local CSV
    try {
      const response = await fetch('/pedidos.csv');
      const csvText = await response.text();
      return this.parseCSVData(csvText);
    } catch (error) {
      console.error('All data sources failed:', error);
      throw new Error('No se pudieron cargar los pedidos desde ninguna fuente');
    }
  }
}

// Export singleton instance
export const googleSheetsService = new GoogleSheetsService();
