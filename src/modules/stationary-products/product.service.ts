import { StationeryProduct } from './product.interface';
import { StationeryProductModel } from './product.model';

const createProductIntoDB = async (productData: StationeryProduct) => {
  const result = await StationeryProductModel.create(productData);

  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
