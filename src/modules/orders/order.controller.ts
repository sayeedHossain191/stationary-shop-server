import { Request, Response, NextFunction } from 'express';
import { orderZodSchema } from './order.zod.validation';
import { orderServices } from './order.service';

// ORDER A PRODUCT
const orderProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // Data validation with zod
    const order = orderZodSchema.parse(req.body);

    const result = await orderServices.orderProductIntoDB(order);

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// CALCULATE REVENUE
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
    next(err);
  }
};

export const OrderControllers = {
  orderProduct,
  calculateRevenue,
};
