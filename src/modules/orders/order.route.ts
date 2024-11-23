import express from 'express';
import { OrderControllers } from './order.controller';

const orderRouter = express.Router();

orderRouter.post('/create-order', OrderControllers.orderProduct);

export default orderRouter;
