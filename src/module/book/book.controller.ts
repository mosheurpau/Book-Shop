import { Request, Response } from "express";
import { createProductService, deleteProductService, getAllProductsService, getProductService, updateProductService } from "./book.service";
import { ProductValidationSchema } from "./book.validation";


// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const zodParsedData = ProductValidationSchema.parse(req.body)
    const product = await createProductService(zodParsedData);
    res.status(201).json({
      message: "Book created successfully",
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating book",
      success: false,
      error,
    });
  }
};

// Get all products or filter by search term
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const products = await getAllProductsService(searchTerm as string);
    res.json({
      message: "Books retrieved successfully",
      status: true,
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error retrieving books",
      success: false,
      error,
    });
  }
};

// Get a specific product by ID
export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await getProductService(req.params.productId);

    if (!product) {
      res.status(404).json({
        message: "Book not found",
        success: false,
      });
    } else {
      res.json({
        message: "Book retrieved successfully",
        status: true,
        data: product,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error retrieving book",
      success: false,
      error,
    });
  }
};

// Update a product
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productData = req.body;

    const product = await updateProductService(productId, productData);

    if (!product) {
      res.status(404).json({
        message: "Book not found",
        success: false,
      });
    } else {
      res.json({
        message: "Book updated successfully",
        status: true,
        data: product,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error updating book",
      success: false,
      error,
    });
  }
};


// Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await deleteProductService(req.params.productId);
    res.json({
      message: "Book deleted successfully",
      status: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error deleting book",
      success: false,
      error,
    });
  }
};
