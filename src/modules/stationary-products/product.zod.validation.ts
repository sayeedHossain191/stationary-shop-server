import { z } from 'zod';

// Define the Zod schema for Stationery Product
export const stationeryProductZodSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Product name must be at least 2 characters long.' })
    .max(100, {
      message: 'Product name must be less than 100 characters long.',
    }),

  brand: z
    .string()
    .trim()
    .min(2, { message: 'Brand name must be at least 2 characters long.' })
    .max(50, { message: 'Brand name must be less than 50 characters long.' }),

  price: z.number().nonnegative({ message: 'Price cannot be negative.' }),

  category: z.enum(
    ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
    {
      errorMap: (issue, ctx) => {
        return { message: `${ctx.data} is not a valid category.` };
      },
    },
  ),

  description: z
    .string()
    .trim()
    .min(10, { message: 'Description must be at least 10 characters long.' })
    .max(500, {
      message: 'Description must be less than 500 characters long.',
    }),

  quantity: z.number().nonnegative({ message: 'Quantity cannot be negative.' }),

  inStock: z.boolean().default(true), // Default to `true` if not provided
});

// Infer the TypeScript type from the Zod schema
export type StationeryProductZodType = z.infer<
  typeof stationeryProductZodSchema
>;
