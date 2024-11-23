import { StationeryProductModel } from '../stationary-products/product.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';
//import { StationeryProductModel } from './stationeryProduct.model';

/**
 * Handles ordering a product and updates inventory.
 * @param orderData - The order details from the request.
 * @returns The created order.
 * @throws Error if the product is not found or there is insufficient stock.
 */
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

// Export the service
export const orderServices = {
  orderProductIntoDB,
};
