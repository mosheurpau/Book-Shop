"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidationSchema = void 0;
const zod_1 = require("zod");
exports.ProductValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    author: zod_1.z.string().min(1, "Author is required"),
    price: zod_1.z.number().min(0, "Price must be 0 or greater"),
    category: zod_1.z.enum(["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"]),
    description: zod_1.z.string().min(1, "Description is required"),
    quantity: zod_1.z.number().min(0, "Quantity must be 0 or greater"),
    inStock: zod_1.z.boolean().optional(),
});
