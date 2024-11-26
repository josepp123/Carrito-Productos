import React, { useState } from 'react';

import ProductList from './components/ProductList';
import Cart from './components/Cart';

//componente principal de la aplicación
const App = () => {
  //estate car, que contiene los productos agregados
  const [cart, setCart] = useState([]);

  //lista de productos predefinidos
  const products = [
    { id: 1, name: 'Leche', price: 8 },
    { id: 2, name: 'Arroz', price: 6 },
    { id: 3, name: 'Fideo', price: 5 },
    { id: 4, name: 'Carne de Res', price: 14 },
    { id: 5, name: 'Queso', price: 15 },
    { id: 6, name: 'Huevos', price: 1 },
  ];

  //función para agregar un producto al carrito
  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div>
      {/* Renderizamos los componentes ProductList y Cart */}
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;