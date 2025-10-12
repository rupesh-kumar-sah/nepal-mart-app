const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../models/User');
const Product = require('../models/Product');

const sampleProducts = [
  {
    name: "Himalayan Trekking Boots",
    description: "Handcrafted with traditional milk leather and premium water durability. Perfect for mountain adventures.",
    price: { npr: 5900, usd: 45 },
    category: "boots",
    images: ["/images/boots1.jpg"],
    variants: {
      sizes: [
        { size: "40", stock: 15 },
        { size: "41", stock: 12 },
        { size: "42", stock: 8 }
      ],
      colors: ["Brown", "Black", "Dark Brown"]
    },
    features: ["Waterproof", "Durable Sole", "Ankle Support"],
    artisan: {
      name: "Raj Kumar",
      story: "Third generation shoemaker from Pokhara with over 20 years of experience."
    },
    tags: ["trekking", "hiking", "mountain"]
  },
  {
    name: "Premium Leather Oxfords",
    description: "Chassis design with contemporary comfort landmarks for greater craftsmen.",
    price: { npr: 8200, usd: 62 },
    category: "shoes",
    images: ["/images/oxfords1.jpg"],
    variants: {
      sizes: [
        { size: "39", stock: 8 },
        { size: "40", stock: 10 },
        { size: "41", stock: 6 }
      ],
      colors: ["Black", "Brown", "Burgundy"]
    },
    features: ["Full Grain Leather", "Cushioned Insole", "Classic Design"],
    artisan: {
      name: "Sita Sharma",
      story: "Master artisan specializing in formal footwear with modern adaptations."
    },
    tags: ["formal", "leather", "business"]
  },
  {
    name: "Heritage Woven Sandals",
    description: "Traditional language design with modern comfort technology.",
    price: { npr: 3800, usd: 29 },
    category: "sandals",
    images: ["/images/sandals1.jpg"],
    variants: {
      sizes: [
        { size: "38", stock: 20 },
        { size: "39", stock: 18 },
        { size: "40", stock: 15 }
      ],
      colors: ["Natural", "Brown", "Black"]
    },
    features: ["Hand Woven", "Breathable", "Lightweight"],
    artisan: {
      name: "Maya Thapa",
      story: "Expert in traditional weaving techniques passed down through generations."
    },
    tags: ["sandals", "summer", "casual"]
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('‚úÖ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log('‚úÖ Cleared existing data');

    // Create admin user
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@nepalmart.com',
      password: 'admin123',
      role: 'admin',
      profile: {
        phone: '+977-1-4567890'
      }
    });
    await adminUser.save();
    console.log('‚úÖ Admin user created');

    // Create sample customer
    const customerUser = new User({
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      password: 'password123',
      role: 'customer',
      profile: {
        phone: '+977-9841234567'
      },
      addresses: [{
        type: 'home',
        street: '123 Main Road',
        city: 'Kathmandu',
        state: 'Bagmati',
        postalCode: '44600',
        country: 'Nepal',
        isDefault: true
      }]
    });
    await customerUser.save();
    console.log('‚úÖ Sample customer created');

    // Create products
    await Product.insertMany(sampleProducts);
    console.log('‚úÖ Sample products created');

    console.log('Ìæâ Database seeded successfully!');
    console.log('Ì≥ß Admin Login: admin@nepalmart.com / admin123');
    console.log('ÔøΩÔøΩ Customer Login: rajesh@example.com / password123');
    
    process.exit(0);
  } catch (error) {
    console.error('‚ùå Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
