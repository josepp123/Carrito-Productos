import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';
import{describe, test, expect} from 'vitest'
test('agregar un producto al carrito', () => {
  //define un producto de prueba
  const products = [{ id: 1, name: 'Producto 1', price: 10 }];

  //define la función mock para `addToCart`
  const addToCart = vi.fn(); //cambiado de jest.fn() a vi.fn()

  // Renderiza el componente con las props necesarias
  render(<ProductList products={products} addToCart={addToCart} />);

  //encuentra el botón "Agregar al carrito" en el DOM virtual
  const button = screen.getByText(/Agregar al carrito/i);

  //simula un clic en el botón
  fireEvent.click(button);

  //verifica que addToCart haya sido llamada con el producto correcto
  expect(addToCart).toHaveBeenCalledWith(products[0]);
});