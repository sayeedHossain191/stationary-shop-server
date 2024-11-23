import { Request, Response } from 'express';
import { orderZodSchema } from './order.zod.validation';
import { orderServices } from './order.service';

const orderProduct = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    // product data validation with zod
    const zodParseData = orderZodSchema.parse(order);

    const result = await orderServices.orderProductIntoDB(zodParseData);
  } catch (err) {
    console.error(err);
  }
};

export const OrderControllers = {
  orderProduct,
};
