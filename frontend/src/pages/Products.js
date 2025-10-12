import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      _id: '1',
      name: 'Himalayan Trekking Boots',
      description: 'Handcrafted with traditional milk leather and premium water durability. Perfect for mountain adventures and trekking in the Himalayas.',
      price: { npr: 5900, usd: 45 },
      category: 'boots',
      features: ['Waterproof', 'Durable Sole', 'Ankle Support', 'Traditional Craftsmanship'],
      inStock: true
    },
    {
      _id: '2',
      name: 'Premium Leather Oxfords',
      description: 'Chassis design with contemporary comfort landmarks for greater craftsmen. Perfect for formal occasions and business wear.',
      price: { npr: 8200, usd: 62 },
      category: 'shoes',
      features: ['Full Grain Leather', 'Cushioned Insole', 'Classic Design'],
      inStock: true
    },
    {
      _id: '3',
      name: 'Heritage Woven Sandals',
      description: 'Traditional language design with modern comfort technology. Lightweight and breathable for everyday wear.',
      price: { npr: 3800, usd: 29 },
      category: 'sandals',
      features: ['Hand Woven', 'Breathable', 'Lightweight'],
      inStock: true
    },
    {
      _id: '4',
      name: 'Mountain Explorer Boots',
      description: 'Sturdy mountain boots with traditional Brenda cushions using ancient techniques. Built for extreme conditions.',
      price: { npr: 9300, usd: 70 },
      category: 'boots',
      features: ['Waterproof', 'Insulated', 'Vibram Sole'],
      inStock: true
    },
    {
      _id: '5',
      name: 'Classic Leather Moccasins',
      description: 'Water resistant leather with traditional Vegalate leather cutting techniques. Comfortable for casual wear.',
      price: { npr: 7500, usd: 57 },
      category: 'moccasins',
      features: ['Soft Leather', 'Flexible Sole', 'Hand Stitched'],
      inStock: true
    },
    {
      _id: '6',
      name: 'Traditional Nepalese Sandals',
      description: 'Authentic design with modern comfort features. Perfect for summer and casual occasions.',
      price: { npr: 2500, usd: 19 },
      category: 'sandals',
      features: ['Traditional Design', 'Comfortable', 'Lightweight'],
      inStock: true
    }
  ];

  return (
    <div className="container" style={{ padding: '2rem 0', minHeight: '50vh' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Our Collection
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.125rem' }}>
        Discover our complete range of authentic Himalayan footwear, handcrafted by master artisans.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {products.map(product => (
          <div key={product._id} className="product-card">
            <div style={{ width: '100%', height: '200px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', fontSize: '3rem' }}>
              {product.category === 'boots' ? 'í±¢' : product.category === 'sandals' ? 'í±¡' : 'í±ž'}
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{product.name}</h3>
                <span style={{ 
                  backgroundColor: product.inStock ? '#dcfce7' : '#fecaca', 
                  color: product.inStock ? '#166534' : '#dc2626',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }} className="line-clamp-3">
                {product.description}
              </p>
              
              <div style={{ marginBottom: '1rem' }}>
                {product.features.slice(0, 2).map((feature, index) => (
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
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#16a34a', display: 'block' }}>
                    NPR {product.price.npr.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    ${product.price.usd} USD
                  </span>
                </div>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
