import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  brand: string;
  priceRetail: number;
  priceWholesale: number;
  season: 'spring' | 'summer' | 'autumn' | 'winter' | 'all';
  scentPyramid: {
    top: string;
    heart: string;
    base: string;
  };
  images: string[];
  volume: string;
  stock: number;
  isHidden: boolean;
  description?: string;
  gender?: string;
  longevity?: number;
  sillage?: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    priceRetail: {
      type: Number,
      required: true,
    },
    priceWholesale: {
      type: Number,
      required: true,
    },
    season: {
      type: String,
      enum: ['spring', 'summer', 'autumn', 'winter', 'all'],
      default: 'all',
    },
    scentPyramid: {
      top: String,
      heart: String,
      base: String,
    },
    images: [String],
    volume: {
      type: String,
      default: '50ml',
    },
    stock: {
      type: Number,
      default: 0,
    },
    isHidden: {
      type: Boolean,
      default: false,
    },
    description: String,
    gender: String,
    longevity: Number,
    sillage: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
