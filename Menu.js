import React, { useState }from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

const Menu = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const handleAddToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      // If exists, increase quantity
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
    else {
      // If not exists, add with initial quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleViewCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedToPayment = () => {
    // Redirection to payment gateway
    alert("Redirecting to payment gateway...");
  };

  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <h1 className='menuSubTitle'>PIZZAS</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, index) => {
                return (
                    <MenuItem
                        key={index}
                        image={menuItem.image}
                        name={menuItem.name}
                        price={menuItem.price}
                        onClick={() => handleAddToCart(menuItem)}
                    />
                );
            })}
        </div>

        <button onClick={handleViewCart} id='btn'>View Cart</button>

        {showCart && (
        <div className="cart">
          <h2>Your Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ₹{calculateTotal()}</p>
          <button id='btn' onClick={handleProceedToPayment}>Proceed to Payment</button>
          <button id='btn' onClick={handleCloseCart}>Close Cart</button>
        </div>
      )}
    </div>
  )
}

export default Menu