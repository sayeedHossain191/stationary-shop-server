import { StationeryProduct } from './product.interface';
import { StationeryProductModel } from './product.model';

const createProductIntoDB = async (productData: StationeryProduct) => {
  const result = await StationeryProductModel.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await StationeryProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await StationeryProductModel.findOne({ id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
};
