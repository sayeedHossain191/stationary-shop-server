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

const calculateRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await orderServices.calculateRevenueFromDB();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: result,
    });
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
};

export const OrderControllers = {
  orderProduct,
  calculateRevenue,
};
