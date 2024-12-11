import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "./book.controller";

const bookRouter = express.Router();

bookRouter.post("/", createProduct);
bookRouter.get("/", getAllProducts);
bookRouter.get("/:productId", getProduct);
bookRouter.put("/:productId", updateProduct);
bookRouter.delete("/:productId", deleteProduct);

export default bookRouter;
