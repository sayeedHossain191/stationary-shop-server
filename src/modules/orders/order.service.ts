import { StationeryProductModel } from '../stationary-products/product.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

const orderProductIntoDB = async (orderData: Order) => {
  const { product, quantity } = orderData;

  // Step 1: Check if the product exists
  const productData = await StationeryProductModel.findById(product);

  if (!productData) {
    throw new Error('Product not found');
  }

  // Step 2: Validate inventory
  if (productData.quantity < quantity) {
    throw new Error(
      `Insufficient stock: Only ${productData.quantity} items left.`,
    );
  }

  // Step 3: Update inventory
  productData.quantity -= quantity;
  if (productData.quantity === 0) {
    productData.inStock = false;
  }
  await productData.save();

  // Step 4: Create the order
  const result = await OrderModel.create(orderData);

  return result;
};

const calculateRevenueFromDB = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null, // No grouping key; calculate total for all orders
        totalRevenue: { $sum: '$totalPrice' }, // Sum up the totalPrice field
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

// Export the service
export const orderServices = {
  orderProductIntoDB,
  calculateRevenueFromDB,
};
