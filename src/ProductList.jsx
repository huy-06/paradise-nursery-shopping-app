import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onBackToHome }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night, purifying air.', cost: '$15' },
        { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde and xylene from air.', cost: '$12' },
        { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg', description: 'Removes mold spores and toxins.', cost: '$18' },
        { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg', description: 'Adds humidity and removes air pollutants.', cost: '$14' },
        { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg', description: 'Broad leaves absorb indoor toxins effectively.', cost: '$20' },
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg', description: 'Purifies indoor air and provides healing gel.', cost: '$10' },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        { name: 'English Lavender', image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80', description: 'Soothing natural aroma that aids sleep.', cost: '$16' },
        { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592729961255-cc3a44635b3b?auto=format&fit=crop&w=600&q=80', description: 'Sweet floral scent promotes relaxation.', cost: '$22' },
        { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg', description: 'Invigorating scent that enhances focus.', cost: '$13' },
        { name: 'Mint Plant', image: 'https://cdn.pixabay.com/photo/2016/01/07/18/40/mint-1126282_1280.jpg', description: 'Crisp, refreshing aroma and culinary use.', cost: '$9' },
        { name: 'Lemon Verbena', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80', description: 'Fresh, citrusy scent energizes your home.', cost: '$17' },
        { name: 'Scented Geranium', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80', description: 'Floral fragrance reminiscent of roses.', cost: '$15' },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        { name: 'ZZ Plant', image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80', description: 'Thrives in low light with little water.', cost: '$24' },
        { name: 'Pothos', image: 'https://images.unsplash.com/photo-1596724817757-0803507d643d?auto=format&fit=crop&w=600&q=80', description: 'Fast-growing vine, extremely resilient.', cost: '$11' },
        { name: 'Cast Iron Plant', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80', description: 'Virtually indestructible indoor plant.', cost: '$26' },
        { name: 'Jade Plant', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80', description: 'Hardy succulent symbol of good luck.', cost: '$14' },
        { name: 'Haworthia', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', description: 'Compact succulent requiring minimal care.', cost: '$10' },
        { name: 'Chinese Evergreen', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80', description: 'Tolerates low light and erratic watering.', cost: '$19' },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-page">
      {/* Dynamic Navbar */}
      <nav className="navbar">
        <div className="nav-brand" onClick={onBackToHome} style={{ cursor: 'pointer' }}>
          <h2>Paradise Nursery</h2>
          <span className="brand-subtitle">Plants for a greener life</span>
        </div>
        <div className="nav-links">
          <button className="nav-btn" onClick={onBackToHome}>Home</button>
          <button className="nav-btn" onClick={() => setShowCart(false)}>Plants</button>
          <div className="cart-icon-container" onClick={() => setShowCart(true)}>
            <svg className="cart-svg" viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="cart-count">{totalCartCount}</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {!showCart ? (
        <div className="product-container">
          {plantsArray.map((categoryGroup, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{categoryGroup.category}</h2>
              <div className="plant-grid">
                {categoryGroup.plants.map((plant, pIndex) => (
                  <div key={pIndex} className="plant-card">
                    <img src={plant.image} alt={plant.name} className="plant-image" />
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-cost">{plant.cost}</p>
                    <button
                      className="add-to-cart-btn"
                      disabled={addedToCart[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
