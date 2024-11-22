import express from 'express';
import { ProductControllers } from './product.controller';

const productRouter = express.Router();

productRouter.post('/create-product', ProductControllers.createProduct);
productRouter.get('/', ProductControllers.getAllProducts);

export default productRouter;
