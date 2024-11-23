import { Order } from './order.interface';
import { OrderModel } from './order.model';

// ORDER A PRODUCT
const orderProductIntoDB = async (orderData: Order) => {
  const result = await OrderModel.create(orderData);
  return result;
};

// GET ORDERED PRODUCT

export const orderServices = {
  orderProductIntoDB,
};
