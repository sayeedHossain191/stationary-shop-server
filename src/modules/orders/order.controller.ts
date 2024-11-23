import { Request, Response, NextFunction } from 'express';
import { orderZodSchema } from './order.zod.validation';
import { orderServices } from './order.service';

const orderProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // Validate input using Zod schema
    const order = orderZodSchema.parse(req.body);

    // Process the order via service
    const result = await orderServices.orderProductIntoDB(order);

    // Respond with success
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (err) {
    // Pass error to next middleware
    next(err);
  }
};

export const OrderControllers = {
  orderProduct,
};
