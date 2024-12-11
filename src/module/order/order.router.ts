import express from "express";
import { calculateRevenue, createOrder } from "./order.controller";


const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/revenue", calculateRevenue);

export default orderRouter;