"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const bookRouter = express_1.default.Router();
bookRouter.post("/", book_controller_1.createProduct);
bookRouter.get("/", book_controller_1.getAllProducts);
bookRouter.get("/:productId", book_controller_1.getProduct);
bookRouter.put("/:productId", book_controller_1.updateProduct);
bookRouter.delete("/:productId", book_controller_1.deleteProduct);
exports.default = bookRouter;
