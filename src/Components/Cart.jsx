import React from 'react'

//componente que muestra los productos en el carrito
const Cart=({cart})=>(
    <div>
        <h2>Carrito</h2>
        <ul>
            {/* recorremos el carrito para mostrar los productos agregados */}
            {cart.map((item, index)=>(
                <li key={index}>
                 {/* Renderizamos el nombre y precio del producto */}
                 {item.name} - ${item.price}
                </li>
            ))}
        </ul>
    </div>
);
export default Cart;
