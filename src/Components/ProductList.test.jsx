import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';

test('agregar un producto al carrito', () => {
  // Define un producto de prueba
  const products = [{ id: 1, name: 'Producto 1', price: 10 }];

  // Define la función mock para `addToCart`
  const addToCart = vi.fn(); // Cambiado de jest.fn() a vi.fn()

  // Renderiza el componente con las props necesarias
  render(<ProductList products={products} addToCart={addToCart} />);

  // Encuentra el botón "Agregar al carrito" en el DOM virtual
  const button = screen.getByText(/Agregar al carrito/i);

  // Simula un clic en el botón
  fireEvent.click(button);

  // Verifica que `addToCart` haya sido llamada con el producto correcto
  expect(addToCart).toHaveBeenCalledWith(products[0]);
});