import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { stationeryProductZodSchema } from './product.zod.validation';

// CREATE A PRODUCT
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    // product data validation with zod
    const zodParseData = stationeryProductZodSchema.parse(product);

    const result = await ProductServices.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// GET ALL PRODUCTS
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// GET A SINGLE PRODUCT
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Single Product retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// UPDATE A PRODUCT
const getUpdatedProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const body = req.body;

    const result = await ProductServices.updateProductFromDB(productId, body);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// DELETE A PRODUCT
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  getUpdatedProduct,
  deleteProduct,
};
