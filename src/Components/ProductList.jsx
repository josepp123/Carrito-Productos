
import React from 'react';

//componente que muestra una lista de productos y permite agregar productos al carrito
const ProductList = ({ products, addToCart }) => (
  <div>
    <h2>Lista de Productos</h2>
    <ul>
      {/*mapeamos cada producto para renderizar un elemento de lista */}
      {products.map((product) => (
        <li key={product.id}>
          {/*mostramos el nombre y el precio del producto */}
          {product.name} - ${product.price}
          
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList; // Exportamos el componente para ser usado en App.jsx