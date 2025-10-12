import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="container" style={{ padding: '2rem 0', minHeight: '50vh' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        {Cart === 'ProductDetail' ? 'Product Details' : 
          Cart === 'UserDashboard' ? 'User Dashboard' :
          Cart === 'AdminDashboard' ? 'Admin Dashboard' : Cart}
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
        {Cart === 'Products' ? 'Browse our complete collection of authentic Himalayan footwear.' :
          Cart === 'Login' ? 'Sign in to your NepalMart account.' :
          Cart === 'Register' ? 'Create a new NepalMart account.' :
          Cart === 'Cart' ? 'Review your shopping cart items.' :
          Cart === 'UserDashboard' ? 'Manage your account and orders.' :
          Cart === 'AdminDashboard' ? 'Administrator panel for managing the store.' :
          'Page details coming soon.'}
      </p>
      <div style={{ 
        backgroundColor: '#f3f4f6', 
        padding: '2rem', 
        borderRadius: '0.5rem',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '1rem' }}>Ì∫ß This page is under development</p>
        <Link 
          to="/" 
          style={{
            color: '#2563eb',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          ‚Üê Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Cart;
