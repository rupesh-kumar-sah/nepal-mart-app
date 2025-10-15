import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      _id: '1',
      name: 'Himalayan Trekking Boots',
      description: 'Handcrafted with traditional milk leather and premium water durability. Perfect for mountain adventures.',
      price: { npr: 5900, usd: 45 },
      category: 'boots',
      image: '/images/himalayan-boots.jpg'
    },
    {
      _id: '2',
      name: 'Premium Leather Oxfords',
      description: 'Chassis design with contemporary comfort landmarks for greater craftsmen.',
      price: { npr: 8200, usd: 62 },
      category: 'shoes',
      image: '/images/leather-oxfords.jpg'
    },
    {
      _id: '3',
      name: 'Heritage Woven Sandals',
      description: 'Traditional language design with modern comfort technology.',
      price: { npr: 3800, usd: 29 },
      category: 'sandals',
      image: '/images/woven-sandals.jpg'
    },
    {
      _id: '4',
      name: 'Classic Leather Moccasins',
      description: 'Water resistant leather with traditional leather cutting techniques.',
      price: { npr: 7500, usd: 57 },
      category: 'moccasins',
      image: '/images/leather-moccasins.jpg'
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to right, #1e3a8a, #7e22ce)', color: 'white', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>NepalMart - Authentic Himalayan Footwear</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '32rem', margin: '0 auto 2rem' }}>
            Discover our complete collection of handcrafted shoes, where traditional artistry meets modern comfort.
          </p>
          <Link 
            to="/products" 
            style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>Ì±û</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Authentic Craftsmanship</h3>
              <p style={{ color: '#6b7280' }}>Handcrafted by master artisans using traditional techniques</p>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>Ì∫ö</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Free Shipping</h3>
              <p style={{ color: '#6b7280' }}>Complimentary shipping on all orders within Nepal</p>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>‚Ü©Ô∏è</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>30-Day Returns</h3>
              <p style={{ color: '#6b7280' }}>Hassle-free returns and exchanges for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>Featured Products</h2>
          <div className="grid grid-cols-4">
            {featuredProducts.map(product => (
              <div key={product._id} className="product-card">
                <div style={{ 
                  width: '100%', 
                  height: '200px', 
                  backgroundColor: '#e5e7eb', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#6b7280',
                  backgroundImage: product.image ? `url(${product.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  {!product.image && (
                    <span style={{ fontSize: '3rem' }}>
                      {product.category === 'boots' ? 'Ì±¢' : product.category === 'sandals' ? 'Ì±°' : 'Ì±û'}
                    </span>
                  )}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{product.name}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }} className="line-clamp-2">{product.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#16a34a' }}>NPR {product.price.npr.toLocaleString()}</span>
                    <Link to={`/products/${product._id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
