import { StationeryProductModel } from '../stationary-products/product.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

// ORDER A PRODUCT
const orderProductIntoDB = async (orderData: Order) => {
  const { product, quantity } = orderData;

  // Check if the product exists
  const productData = await StationeryProductModel.findById(product);

  if (!productData) {
    throw new Error('Product not found');
  }

  // Validate inventory
  if (productData.quantity < quantity) {
    throw new Error(
      `Insufficient stock: Only ${productData.quantity} items left.`,
    );
  }

  // Update inventory
  productData.quantity -= quantity;
  if (productData.quantity === 0) {
    productData.inStock = false;
  }
  await productData.save();

  // Create the order
  const result = await OrderModel.create(orderData);

  return result;
};

// CALCULATE REVENUE
const calculateRevenueFromDB = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null, // No grouping key; calculate total for all orders
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0, // Exclude the _id field in the output
        totalRevenue: 1,
      },
    },
  ]);

  return result.length > 0 ? result[0] : { totalRevenue: 0 };
};

export const orderServices = {
  orderProductIntoDB,
  calculateRevenueFromDB,
};
