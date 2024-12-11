"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.getAllProducts = exports.createProduct = void 0;
const book_service_1 = require("./book.service");
const book_validation_1 = require("./book.validation");
// Create a new product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodParsedData = book_validation_1.ProductValidationSchema.parse(req.body);
        const product = yield (0, book_service_1.createProductService)(zodParsedData);
        res.status(201).json({
            message: "Book created successfully",
            success: true,
            data: product,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error creating book",
            success: false,
            error,
        });
    }
});
exports.createProduct = createProduct;
// Get all products or filter by search term
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const products = yield (0, book_service_1.getAllProductsService)(searchTerm);
        res.json({
            message: "Books retrieved successfully",
            status: true,
            data: products,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error retrieving books",
            success: false,
            error,
        });
    }
});
exports.getAllProducts = getAllProducts;
// Get a specific product by ID
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, book_service_1.getProductService)(req.params.productId);
        if (!product) {
            res.status(404).json({
                message: "Book not found",
                success: false,
            });
        }
        else {
            res.json({
                message: "Book retrieved successfully",
                status: true,
                data: product,
            });
        }
    }
    catch (error) {
        res.status(400).json({
            message: "Error retrieving book",
            success: false,
            error,
        });
    }
});
exports.getProduct = getProduct;
// Update a product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const product = yield (0, book_service_1.updateProductService)(productId, productData);
        if (!product) {
            res.status(404).json({
                message: "Book not found",
                success: false,
            });
        }
        else {
            res.json({
                message: "Book updated successfully",
                status: true,
                data: product,
            });
        }
    }
    catch (error) {
        res.status(400).json({
            message: "Error updating book",
            success: false,
            error,
        });
    }
});
exports.updateProduct = updateProduct;
// Delete a product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, book_service_1.deleteProductService)(req.params.productId);
        res.json({
            message: "Book deleted successfully",
            status: true,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error deleting book",
            success: false,
            error,
        });
    }
});
exports.deleteProduct = deleteProduct;
