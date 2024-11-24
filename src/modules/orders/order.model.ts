import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, 'Customer email is required.'],
      match: [/.+@.+\..+/, 'Please enter a valid email address.'],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'StationeryProduct', // Refers to the StationeryProduct model
      required: [true, 'Product reference is required.'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required.'],
      min: [1, 'Quantity must be at least 1.'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required.'],
      min: [0, 'Total price cannot be negative.'],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

export const OrderModel = model<Order>('Order', orderSchema);
