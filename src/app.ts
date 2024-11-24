import express, { Request, Response } from 'express';
import cors from 'cors';
import productRouter from './modules/stationary-products/product.route';
import orderRouter from './modules/orders/order.route';

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

const getAController = (req: Request, res: Response) => {
  res.send('Hello From Stationary');
};

app.get('/', getAController);

export default app;
