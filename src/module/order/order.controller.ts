import { Request, Response } from "express";
import { calculateRevenueService, createOrderService } from "./order.service";
import { OrderValidationSchema } from "./order.validation";

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const zodParsedData = OrderValidationSchema.parse(req.body)
    const order = await createOrderService(zodParsedData);
    res.status(201).json({
      message: "Order created successfully",
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating order",
      success: false,
      error,
    });
  }
};

// Calculate total revenue
export const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await calculateRevenueService();
    res.json({
      message: "Revenue calculated successfully",
      status: true,
      data: { totalRevenue },
    });
  } catch (error) {
    res.status(400).json({
      message: "Error calculating revenue",
      success: false,
      error,
    });
  }
};
