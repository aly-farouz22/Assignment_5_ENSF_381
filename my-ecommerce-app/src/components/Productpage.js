import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Productpage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]); // Add a state for storing fetched products

  useEffect(() => {
    // Fetch cart items from localStorage
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    // Store cart items to localStorage whenever they change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    // Fetch products from the Flask backend API
    fetch('http://localhost:5000/api/products') // Adjust the URL to match your actual backend API
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Failed to fetch products:', error));
  }, []); // This effect runs once on component mount to fetch products

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.reduce((result, item) => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          result.push({...item, quantity: item.quantity - 1});
        }
      } else {
        result.push(item);
      }
      return result;
    }, []));
  };

  return (
    <div>
      <Header />
      <table>
        <tbody>
          <tr>
            <td><ProductList products={products} onAddToCart={addToCart} /></td>
            <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} onRemove={removeFromCart} /></td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Productpage;
