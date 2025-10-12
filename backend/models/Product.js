const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: {
    npr: { type: Number, required: true },
    usd: { type: Number, required: true }
  },
  category: {
    type: String,
    required: true,
    enum: ['boots', 'sandals', 'shoes', 'loafers', 'moccasins']
  },
  images: [{ type: String }],
  variants: {
    sizes: [{ size: String, stock: Number }],
    colors: [String]
  },
  features: [String],
  artisan: {
    name: String,
    story: String,
    image: String
  },
  isActive: { type: Boolean, default: true },
  tags: [String]
}, { timestamps: true });

productSchema.index({ name: 'text', description: 'text', tags: 'text' });
module.exports = mongoose.model('Product', productSchema);
