import { IBook } from "./book.interface";
import { Product } from "./book.model";


// Create a new product
export const createProductService = async (productData: IBook) => {
  const product = new Product(productData);
  return await product.save();
};

// Get all products or filter by search term
export const getAllProductsService = async (searchTerm?: string) => {
  const query = searchTerm
    ? {
        $or: [
          { title: new RegExp(searchTerm, "i") },
          { author: new RegExp(searchTerm, "i") },
          { category: new RegExp(searchTerm, "i") },
        ],
      }
    : {};
  return await Product.find(query);
};

// Get a specific product by ID
export const getProductService = async (productId: string) => {
  return await Product.findById(productId);
};

// Update a product
export const updateProductService = async (productId: string, updateData: Partial<IBook>) => {
  return await Product.findByIdAndUpdate(productId, updateData, { new: true });
};

// Delete a product
export const deleteProductService = async (productId: string) => {
  return await Product.findByIdAndDelete(productId);
};
