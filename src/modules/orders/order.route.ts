import express from 'express';
import { OrderControllers } from './order.controller';

const orderRouter = express.Router();

orderRouter.post('/create-order', OrderControllers.orderProduct);
orderRouter.get('/revenue', OrderControllers.calculateRevenue);

export default orderRouter;
