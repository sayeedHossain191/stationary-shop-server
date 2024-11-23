import { StationeryProduct } from './product.interface';
import { StationeryProductModel } from './product.model';

// CREATE A PRODUCT
const createProductIntoDB = async (productData: StationeryProduct) => {
  const result = await StationeryProductModel.create(productData);
  return result;
};

// GET ALL PRODUCTS
const getAllProductsFromDB = async () => {
  const result = await StationeryProductModel.find();
  return result;
};

// GET SINGLE PRODUCT
const getSingleProductFromDB = async (_id: string) => {
  const result = await StationeryProductModel.findOne({ _id });
  return result;
};

// UPDATE A PRODUCT
const updateProductFromDB = async (_id: string, data: StationeryProduct) => {
  const result = await StationeryProductModel.findByIdAndUpdate({ _id, data });
  return result;
};

// DELETE A PRODUCT
const deleteProductFromDB = async (_id: string) => {
  const result = await StationeryProductModel.findByIdAndDelete({ _id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
