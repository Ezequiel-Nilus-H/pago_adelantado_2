# Sistema de Pedidos con Rutas Dinámicas

Este proyecto implementa un sistema de pedidos que permite mostrar información específica de cada pedido mediante URLs dinámicas.

## Características

- **Rutas dinámicas**: Cada pedido tiene un UUID único que se usa en la URL
- **Datos desde CSV**: Los pedidos se cargan desde un archivo CSV
- **Pantalla de error**: Muestra un mensaje cuando el pedido no existe
- **Pantalla de carga**: Muestra un spinner mientras se cargan los datos

## Estructura de URLs

- `/` - Página principal (Home)
- `/pedido/{uuid}` - Muestra los detalles del pedido con el UUID especificado
- Cualquier otra ruta - Muestra pantalla de error

## Ejemplos de uso

### Pedidos válidos (UUIDs del CSV):
- `/pedido/a1b2c3d4-e5f6-7890-abcd-ef1234567890` - Pedido de Juan Pérez
- `/pedido/b2c3d4e5-f6g7-8901-bcde-f23456789012` - Pedido de María González
- `/pedido/c3d4e5f6-g7h8-9012-cdef-345678901234` - Pedido de Carlos Rodríguez

### Pedidos inválidos:
- `/pedido/pedido-inexistente` - Mostrará pantalla de error
- `/pedido/123` - Mostrará pantalla de error

## Archivos principales

- `public/pedidos.csv` - Archivo con datos de los pedidos
- `src/hooks/usePedidosData.js` - Hook para cargar y manejar datos del CSV
- `src/components/PedidoDetail.jsx` - Componente para mostrar detalles del pedido
- `src/components/PedidoNotFound.jsx` - Componente para pedidos no encontrados
- `src/components/LoadingPedido.jsx` - Componente de carga
- `src/App.jsx` - Configuración de rutas principales

## Instalación y ejecución

```bash
npm install
npm run dev
```

El servidor se ejecutará en `http://localhost:5173`

## Estructura del CSV

El archivo `pedidos.csv` contiene las siguientes columnas:
- `id` - UUID único del pedido
- `nombre_cliente` - Nombre del cliente
- `direccion` - Dirección de entrega
- `fecha_entrega` - Fecha de entrega
- `horario` - Horario de entrega
- `numero_pedido` - Número del pedido
- `total_pedido` - Total del pedido
- `descuento` - Descuento aplicado
- `total_pagar` - Total a pagar
- `telefono` - Teléfono del cliente
- `email` - Email del cliente
