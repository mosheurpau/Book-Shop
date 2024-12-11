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
exports.calculateRevenue = exports.createOrder = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
// Create a new order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodParsedData = order_validation_1.OrderValidationSchema.parse(req.body);
        const order = yield (0, order_service_1.createOrderService)(zodParsedData);
        res.status(201).json({
            message: "Order created successfully",
            success: true,
            data: order,
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error creating order",
            success: false,
            error,
        });
    }
});
exports.createOrder = createOrder;
// Calculate total revenue
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield (0, order_service_1.calculateRevenueService)();
        res.json({
            message: "Revenue calculated successfully",
            status: true,
            data: { totalRevenue },
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error calculating revenue",
            success: false,
            error,
        });
    }
});
exports.calculateRevenue = calculateRevenue;
