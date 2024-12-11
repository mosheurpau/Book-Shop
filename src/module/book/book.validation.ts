import { z } from "zod";

export const ProductValidationSchema = z.object({
  title: z.string().min(1, "Title is required"), 
  author: z.string().min(1, "Author is required"), 
  price: z.number().min(0, "Price must be 0 or greater"), 
  category: z.enum(["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"]), 
  description: z.string().min(1, "Description is required"), 
  quantity: z.number().min(0, "Quantity must be 0 or greater"), 
  inStock: z.boolean().optional(), 
});
