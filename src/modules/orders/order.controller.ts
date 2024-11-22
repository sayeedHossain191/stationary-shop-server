import { Request, Response } from 'express';

const orderControllers = async (req: Request, res: Response) => {
  try {
    const order = req.body;
  } catch (err) {
    console.error(err);
  }
};
