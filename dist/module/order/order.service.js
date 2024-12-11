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
exports.calculateRevenueService = exports.createOrderService = void 0;
const book_model_1 = require("../book/book.model");
const order_model_1 = require("./order.model");
// Create a new order
const createOrderService = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const { product, quantity } = orderData;
    // Find the product and check stock
    const book = yield book_model_1.Product.findById(product);
    if (!book || book.quantity < quantity) {
        throw new Error("Insufficient stock");
    }
    // Calculate total price and save order
    const totalPrice = book.price * quantity;
    const order = new order_model_1.Order(Object.assign(Object.assign({}, orderData), { totalPrice }));
    yield order.save();
    // Update product stock
    book.quantity -= quantity;
    book.inStock = book.quantity > 0;
    yield book.save();
    return order;
});
exports.createOrderService = createOrderService;
// Calculate total revenue
const calculateRevenueService = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const revenue = yield order_model_1.Order.aggregate([
        { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } },
    ]);
    return ((_a = revenue[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
});
exports.calculateRevenueService = calculateRevenueService;
