import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  return (
    <div className="container" style={{ padding: '2rem 0', minHeight: '50vh' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        {ProductDetail === 'ProductDetail' ? 'Product Details' : ProductDetail}
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
        {ProductDetail === 'Products' ? 'Browse our complete collection of authentic Himalayan footwear.' :
         ProductDetail === 'Login' ? 'Sign in to your NepalMart account.' :
         ProductDetail === 'Register' ? 'Create a new NepalMart account.' :
         ProductDetail === 'Cart' ? 'Review your shopping cart items.' : 'Page details coming soon.'}
      </p>
      <div style={{ backgroundColor: '#f3f4f6', padding: '2rem', borderRadius: '0.5rem', textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem' }}>Ì∫ß This page is under development</p>
        <Link to="/" className="btn btn-primary">‚Üê Back to Home</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
