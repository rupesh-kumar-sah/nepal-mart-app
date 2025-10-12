import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              NepalMart
            </h3>
            <p style={{ color: '#9ca3af' }}>
              Authentic Himalayan footwear preserving traditional craftsmanship for the modern world.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', color: '#9ca3af' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="/products" style={{ color: '#9ca3af', textDecoration: 'none' }}>All Products</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>New Arrivals</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Best Sellers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Customer Care</h4>
            <ul style={{ listStyle: 'none', color: '#9ca3af' }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Size Guide</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Shipping Info</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Returns & Exchanges</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Get in Touch</h4>
            <ul style={{ listStyle: 'none', color: '#9ca3af' }}>
              <li style={{ marginBottom: '0.5rem' }}>Kathmandu, Nepal</li>
              <li style={{ marginBottom: '0.5rem' }}>+977-1-4567890</li>
              <li style={{ marginBottom: '0.5rem' }}>hello@nepalmart.com</li>
            </ul>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '1.5rem',
          textAlign: 'center',
          color: '#9ca3af'
        }}>
          <p>&copy; 2024 NepalMart Store. All Rights Reserved. | Crafted with ❤️ in Nepal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
