import express from 'express';
import { ProductControllers } from './product.controller';

const productRouter = express.Router();

productRouter.post('/', ProductControllers.createProduct);
productRouter.get('/', ProductControllers.getAllProducts);
productRouter.get('/:productId', ProductControllers.getSingleProduct);
productRouter.put('/:productId', ProductControllers.getUpdatedProduct);
productRouter.delete('/:productId', ProductControllers.deleteProduct);

export default productRouter;
