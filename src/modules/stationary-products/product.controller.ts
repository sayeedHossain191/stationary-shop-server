import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { stationeryProductZodSchema } from './product.zod.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    // data validation with zod
    const zodParseData = stationeryProductZodSchema.parse(product);

    const result = await ProductServices.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
  }
};

// const getSingleProduct=async(req: Request, res: Response)=>{
//     try{
//         const result=await ProductServices.getSingleProductFromDB();
//         res.status(200).json({
//             success: true,
//             message: 'Single Product retrieved successfully',
//             data: result,
//           });
//     }catch(err){
// console.error(err);

//     }
// }

export const ProductControllers = {
  createProduct,
  getAllProducts,
};
