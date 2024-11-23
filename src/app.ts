import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './modules/stationary-products/product.route';
import orderRouter from './modules/orders/order.route';

const app = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

const getAController = (req: Request, res: Response) => {
  res.send('Hello');
};

app.get('/', getAController);

// Error-handling Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: 'Route not found',
    status: false,
  });
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log error stack for debugging
  res.status(err.status || 500).json({
    message: err.message || 'An unexpected error occurred',
    status: false,
    errors: err.errors || undefined, // Validation errors, if any
  });
});

export default app;
