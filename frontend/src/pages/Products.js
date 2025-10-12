import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products = [
    {
      _id: '1',
      name: 'Himalayan Trekking Boots',
      description: 'Handcrafted with traditional milk leather and premium water durability. Perfect for mountain adventures and trekking in the Himalayas.',
      price: { npr: 5900, usd: 45 },
      category: 'boots',
      features: ['Waterproof', 'Durable Sole', 'Ankle Support', 'Traditional Craftsmanship'],
      artisan: { name: 'Raj Kumar', experience: '20 years' },
      inStock: true
    },
    {
      _id: '2',
      name: 'Premium Leather Oxfords',
      description: 'Chassis design with contemporary comfort landmarks for greater craftsmen. Perfect for formal occasions and business settings.',
      price: { npr: 8200, usd: 62 },
      category: 'shoes',
      features: ['Full Grain Leather', 'Cushioned Insole', 'Classic Design', 'Goodyear Welt'],
      artisan: { name: 'Sita Sharma', experience: '15 years' },
      inStock: true
    },
    {
      _id: '3',
      name: 'Heritage Woven Sandals',
      description: 'Traditional language design with modern comfort technology. Lightweight and breathable for everyday wear.',
      price: { npr: 3800, usd: 29 },
      category: 'sandals',
      features: ['Hand Woven', 'Breathable', 'Lightweight', 'Flexible Sole'],
      artisan: { name: 'Maya Thapa', experience: '12 years' },
      inStock: true
    },
    {
      _id: '4',
      name: 'Mountain Explorer Boots',
      description: 'Sturdy mountain boots with traditional Brenda cushions using ancient techniques. Built for extreme conditions.',
      price: { npr: 9300, usd: 70 },
      category: 'boots',
      features: ['Waterproof', 'Insulated', 'Vibram Sole', 'Ankle Support'],
      artisan: { name: 'Bhimsen Gurung', experience: '25 years' },
      inStock: true
    },
    {
      _id: '5',
      name: 'Classic Leather Moccasins',
      description: 'Water resistant leather with traditional Vegalate leather cutting techniques. Comfortable for casual wear.',
      price: { npr: 7500, usd: 57 },
      category: 'moccasins',
      features: ['Soft Leather', 'Flexible Sole', 'Hand Stitched', 'Comfort Fit'],
      artisan: { name: 'Kiran Tamang', experience: '18 years' },
      inStock: true
    },
    {
      _id: '6',
      name: 'Traditional Nepalese Sandals',
      description: 'Authentic design with modern comfort features. Perfect for summer and casual occasions.',
      price: { npr: 2500, usd: 19 },
      category: 'sandals',
      features: ['Traditional Design', 'Comfortable', 'Lightweight', 'Durable'],
      artisan: { name: 'Anita Rai', experience: '10 years' },
      inStock: true
    }
  ];

  const categories = ['all', 'boots', 'shoes', 'sandals', 'moccasins'];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container" style={{ padding: '2rem 0', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
        Our Collection
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem', textAlign: 'center', fontSize: '1.1rem' }}>
        Discover authentic Himalayan footwear crafted by master artisans
      </p>

      {/* Category Filter */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', backgroundColor: '#f3f4f6', padding: '0.5rem', borderRadius: '0.5rem', gap: '0.5rem' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                border: 'none',
                backgroundColor: selectedCategory === category ? '#2563eb' : 'transparent',
                color: selectedCategory === category ? 'white' : '#374151',
                cursor: 'pointer',
                fontWeight: '500',
                textTransform: 'capitalize'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {filteredProducts.map(product => (
          <div key={product._id} className="product-card" style={{ position: 'relative' }}>
            {product.inStock && (
              <span style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#10b981',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                fontSize: '0.75rem',
                fontWeight: '600',
                zIndex: 10
              }}>
                In Stock
              </span>
            )}
            
            <div style={{
              width: '100%',
              height: '220px',
              backgroundColor: '#e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '4rem'
            }}>
              í±ž
            </div>
            
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', flex: 1 }}>
                  {product.name}
                </h3>
                <span style={{
                  backgroundColor: '#fbbf24',
                  color: '#92400e',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  textTransform: 'capitalize'
                }}>
                  {product.category}
                </span>
              </div>
              
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                {product.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: '1rem' }}>
                {product.features.slice(0, 3).map((feature, index) => (
                  <span key={index} style={{
                    display: 'inline-block',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>

              {/* Artisan Info */}
              <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                <strong>Artisan:</strong> {product.artisan.name} ({product.artisan.experience} experience)
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#16a34a' }}>
                    NPR {product.price.npr.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280', marginLeft: '0.5rem' }}>
                    ${product.price.usd} USD
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link 
                    to={`/products/${product._id}`}
                    style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.375rem',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    View Details
                  </Link>
                  <button
                    style={{
                      backgroundColor: '#f97316',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.375rem',
                      border: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Results Count */}
      <div style={{ textAlign: 'center', marginTop: '2rem', color: '#6b7280' }}>
        Showing {filteredProducts.length} of {products.length} products
        {selectedCategory !== 'all' && ` in ${selectedCategory}`}
      </div>
    </div>
  );
};

export default Products;
