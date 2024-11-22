import express, { Request, Response } from 'express';
import cors from 'cors';
import productRouter from './modules/stationary-products/product.route';

const app = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter);

const getAController = (req: Request, res: Response) => {
  res.send('Hello');
};

app.get('/', getAController);

export default app;
