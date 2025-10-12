import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Mock cart items
  const cartItems = [
    {
      _id: '1',
      product: {
        _id: '1',
        name: 'Himalayan Trekking Boots',
        price: { npr: 5900, usd: 45 }
      },
      quantity: 1,
      size: '42',
      color: 'Brown'
    },
    {
      _id: '2',
      product: {
        _id: '3',
        name: 'Heritage Woven Sandals',
        price: { npr: 3800, usd: 29 }
      },
      quantity: 2,
      size: '40',
      color: 'Natural'
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.product.price.npr * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="container" style={{ padding: '2rem 0', minHeight: '50vh' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '2rem' }}>Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>Ìªí</div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Your cart is empty</h2>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Discover our authentic Himalayan footwear collection</p>
          <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Cart Items */}
          <div>
            {cartItems.map(item => (
              <div key={item._id} style={{ 
                display: 'flex', 
                gap: '1rem', 
                padding: '1.5rem', 
                backgroundColor: 'white', 
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                marginBottom: '1rem'
              }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.375rem', fontSize: '1.5rem' }}>
                  Ì±¢
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>{item.product.name}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button style={{ padding: '0.25rem 0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', backgroundColor: 'white' }}>-</button>
                      <span style={{ padding: '0.25rem 1rem' }}>{item.quantity}</span>
                      <button style={{ padding: '0.25rem 0.5rem', border: '1px solid #d1d5db', borderRadius: '0.25rem', backgroundColor: 'white' }}>+</button>
                    </div>
                    <span style={{ fontSize: '1.125rem', fontWeight: '600', color: '#16a34a' }}>
                      NPR {(item.product.price.npr * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
                <button style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem' }}>
                  Ì∑ëÔ∏è
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span>Subtotal</span>
              <span>NPR {subtotal.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span>Shipping</span>
              <span style={{ color: '#10b981' }}>FREE</span>
            </div>
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '600', fontSize: '1.125rem' }}>
                <span>Total</span>
                <span style={{ color: '#16a34a' }}>NPR {total.toLocaleString()}</span>
              </div>
            </div>
            <button style={{ width: '100%', padding: '1rem', backgroundColor: '#f97316', color: 'white', border: 'none', borderRadius: '0.375rem', fontSize: '1.125rem', fontWeight: '600', cursor: 'pointer' }}>
              Proceed to Checkout
            </button>
            <Link to="/products" style={{ display: 'block', textAlign: 'center', marginTop: '1rem', color: '#2563eb', textDecoration: 'none' }}>
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
