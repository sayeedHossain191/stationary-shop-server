import { Types } from 'mongoose';
import { z } from 'zod';

// Define Zod Schema for Order
export const orderZodSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address.')
    .min(1, 'Customer email is required.'),

  product: z
    .string()
    .regex(/^[a-fA-F0-9]{24}$/, 'Invalid product reference ID.')
    .transform((id) => new Types.ObjectId(id)), // Transform string to ObjectId

  quantity: z
    .number()
    .int('Quantity must be an integer.')
    .min(1, 'Quantity must be at least 1.'),

  totalPrice: z
    .number()
    .nonnegative('Total price cannot be negative.')
    .min(0, 'Total price cannot be less than zero.'),
});

// Infer the TypeScript type from the Zod schema
export type OrderZodType = z.infer<typeof orderZodSchema>;
