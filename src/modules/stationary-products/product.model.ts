import { model, Schema } from 'mongoose';
import { StationeryProduct } from './product.interface';

const stationeryProductSchema = new Schema<StationeryProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required.'],
      trim: true,
      minlength: [2, 'Product name must be at least 2 characters long.'],
      maxlength: [100, 'Product name must be less than 100 characters long.'],
    },
    brand: {
      type: String,
      required: [true, 'Brand name is required.'],
      trim: true,
      minlength: [2, 'Brand name must be at least 2 characters long.'],
      maxlength: [50, 'Brand name must be less than 50 characters long.'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required.'],
      min: [0, 'Price cannot be negative.'],
    },
    category: {
      type: String,
      required: [true, 'Category is required.'],
      enum: {
        values: [
          'Writing',
          'Office Supplies',
          'Art Supplies',
          'Educational',
          'Technology',
        ],
        message: '{VALUE} is not a valid category.',
      },
    },
    description: {
      type: String,
      required: [true, 'Description is required.'],
      trim: true,
      minlength: [10, 'Description must be at least 10 characters long.'],
      maxlength: [500, 'Description must be less than 500 characters long.'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required.'],
      min: [0, 'Quantity cannot be negative.'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'In-stock status is required.'],
      default: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

export const StationeryProductModel = model<StationeryProduct>(
  'StationeryProduct',
  stationeryProductSchema,
);
