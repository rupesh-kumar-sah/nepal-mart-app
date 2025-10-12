import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('40');
  const [selectedColor, setSelectedColor] = useState('Brown');
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app, this would come from API
  const product = {
    _id: '1',
    name: 'Himalayan Trekking Boots',
    description: 'Handcrafted with traditional milk leather and premium water durability. These boots are perfect for mountain adventures and trekking in the Himalayas. Each pair is meticulously crafted by skilled artisans using techniques passed down through generations.',
    price: { npr: 5900, usd: 45 },
    category: 'boots',
    images: ['/images/boots1.jpg'],
    variants: {
      sizes: [
        { size: "40", stock: 15 },
        { size: "41", stock: 12 },
        { size: "42", stock: 8 },
        { size: "43", stock: 5 }
      ],
      colors: ["Brown", "Black", "Dark Brown"]
    },
    features: [
      "Waterproof full-grain leather",
      "Durable Vibram rubber sole",
      "Ankle support with padding",
      "Traditional hand-stitching",
      "Breathable lining",
      "Adjustable lace-up system"
    ],
    artisan: {
      name: "Raj Kumar",
      story: "Third generation shoemaker from Pokhara with over 20 years of experience in traditional boot making. Raj learned the craft from his father and grandfather, preserving techniques that date back centuries.",
      image: "/images/artisan-raj.jpg",
      location: "Pokhara, Nepal"
    },
    specifications: {
      material: "Full-grain leather, rubber sole",
      closure: "Lace-up",
      care: "Clean with damp cloth, avoid direct heat",
      origin: "Handcrafted in Nepal"
    },
    isActive: true,
    tags: ["trekking", "hiking", "mountain", "traditional", "handcrafted"]
  };

  const handleAddToCart = () => {
    alert(`Added to cart: ${product.name} - Size: ${selectedSize}, Color: ${selectedColor}, Quantity: ${quantity}`);
    // In real app, this would dispatch to Redux store
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout: ${product.name}`);
    // In real app, this would navigate to checkout
  };

  return (
    <div className="container" style={{ padding: '2rem 0', minHeight: '80vh' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/products" style={{ color: '#2563eb', textDecoration: 'none' }}>
          ‚Üê Back to Products
        </Link>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
        {/* Product Image */}
        <div>
          <div style={{
            width: '100%',
            height: '400px',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontSize: '6rem',
            borderRadius: '0.5rem',
            marginBottom: '1rem'
          }}>
            Ì±û
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[1, 2, 3].map((img, index) => (
              <div key={index} style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '1.5rem',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}>
                Ì±û
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <span style={{
            backgroundColor: '#fbbf24',
            color: '#92400e',
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            {product.category}
          </span>
          
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', margin: '0.5rem 0 1rem 0' }}>
            {product.name}
          </h1>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16a34a' }}>
              NPR {product.price.npr.toLocaleString()}
            </span>
            <span style={{ fontSize: '1.25rem', color: '#6b7280', marginLeft: '0.5rem' }}>
              ${product.price.usd} USD
            </span>
          </div>

          <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '2rem' }}>
            {product.description}
          </p>

          {/* Size Selection */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Size</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {product.variants.sizes.map(sizeObj => (
                <button
                  key={sizeObj.size}
                  onClick={() => setSelectedSize(sizeObj.size)}
                  style={{
                    padding: '0.5rem 1rem',
                    border: selectedSize === sizeObj.size ? '2px solid #2563eb' : '1px solid #d1d5db',
                    backgroundColor: selectedSize === sizeObj.size ? '#2563eb' : 'white',
                    color: selectedSize === sizeObj.size ? 'white' : '#374151',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  {sizeObj.size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Color</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {product.variants.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    padding: '0.5rem 1rem',
                    border: selectedColor === color ? '2px solid #2563eb' : '1px solid #d1d5db',
                    backgroundColor: 'white',
                    color: '#374151',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Quantity</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: '0.375
# Create a detailed product page
cat > src/pages/ProductDetail.js << 'EOF'
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Mock product data - in real app, you'd fetch this from API
  const product = {
    _id: id,
    name: 'Himalayan Trekking Boots',
    description: 'Handcrafted with traditional milk leather and premium water durability. These boots are perfect for mountain adventures and trekking in the Himalayas. Each pair is meticulously crafted by skilled artisans using techniques passed down through generations.',
    price: { npr: 5900, usd: 45 },
    category: 'boots',
    features: ['Waterproof', 'Durable Sole', 'Ankle Support', 'Traditional Craftsmanship', 'Mountain Ready', 'Comfort Fit'],
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['Brown', 'Black', 'Dark Brown'],
    inStock: true,
    artisan: {
      name: 'Raj Kumar',
      story: 'Third generation shoemaker from Pokhara with over 20 years of experience in traditional boot making. Specializes in mountain footwear that combines traditional techniques with modern comfort.',
      location: 'Pokhara, Nepal'
    },
    images: ['/images/boots1.jpg', '/images/boots2.jpg']
  };

  return (
    <div className="container" style={{ padding: '2rem 0', minHeight: '50vh' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/products" style={{ color: '#2563eb', textDecoration: 'none' }}>‚Üê Back to Products</Link>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
        {/* Product Images */}
        <div>
          <div style={{ width: '100%', height: '400px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', fontSize: '4rem', borderRadius: '0.5rem' }}>
            Ì±¢
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {[1, 2, 3].map((img, index) => (
              <div key={index} style={{ width: '80px', height: '80px', backgroundColor: '#d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.375rem', fontSize: '1.5rem' }}>
                Ì±¢
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{product.name}</h1>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '1.125rem', lineHeight: '1.6' }}>
            {product.description}
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16a34a' }}>
              NPR {product.price.npr.toLocaleString()}
            </span>
            <span style={{ fontSize: '1.125rem', color: '#6b7280', marginLeft: '0.5rem' }}>
              ${product.price.usd} USD
            </span>
          </div>

          {/* Features */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem' }}>Features</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {product.features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#10b981' }}>‚úì</span>
                  <span style={{ fontSize: '0.875rem' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem' }}>Size</h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {product.sizes.map(size => (
                <button
                  key={size}
                  style={{
                    padding: '0.5rem 1rem',
                    border: '2px solid #d1d5db',
                    borderRadius: '0.375rem',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            style={{
              width: '100%',
              padding: '1rem 2rem',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >
            Add to Cart - NPR {product.price.npr.toLocaleString()}
          </button>

          {/* Artisan Story */}
          <div style={{ backgroundColor: '#f3f4f6', padding: '1.5rem', borderRadius: '0.5rem', marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Crafted by {product.artisan.name}</h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.5' }}>
              {product.artisan.story}
            </p>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.5rem' }}>
              Location: {product.artisan.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
