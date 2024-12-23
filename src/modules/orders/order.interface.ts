// 1. Create an interface representing a document in MongoDB.
import { Types } from 'mongoose';

export interface Order {
  email: string;
  product: Types.ObjectId; // Reference to StationeryProduct
  quantity: number;
  totalPrice: number;
}
