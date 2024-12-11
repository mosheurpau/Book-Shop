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
exports.deleteProductService = exports.updateProductService = exports.getProductService = exports.getAllProductsService = exports.createProductService = void 0;
const book_model_1 = require("./book.model");
// Create a new product
const createProductService = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new book_model_1.Product(productData);
    return yield product.save();
});
exports.createProductService = createProductService;
// Get all products or filter by search term
const getAllProductsService = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const query = searchTerm
        ? {
            $or: [
                { title: new RegExp(searchTerm, "i") },
                { author: new RegExp(searchTerm, "i") },
                { category: new RegExp(searchTerm, "i") },
            ],
        }
        : {};
    return yield book_model_1.Product.find(query);
});
exports.getAllProductsService = getAllProductsService;
// Get a specific product by ID
const getProductService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Product.findById(productId);
});
exports.getProductService = getProductService;
// Update a product
const updateProductService = (productId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Product.findByIdAndUpdate(productId, updateData, { new: true });
});
exports.updateProductService = updateProductService;
// Delete a product
const deleteProductService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Product.findByIdAndDelete(productId);
});
exports.deleteProductService = deleteProductService;
