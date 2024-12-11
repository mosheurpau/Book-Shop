import { Product } from "../book/book.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

// Create a new order
export const createOrderService = async (orderData: IOrder) => {
  const { product, quantity } = orderData;

  // Find the product and check stock
  const book = await Product.findById(product);
  if (!book || book.quantity < quantity) {
    throw new Error("Insufficient stock");
  }

  // Calculate total price and save order
  const totalPrice = book.price * quantity;
  const order = new Order({ ...orderData, totalPrice });
  await order.save();

  // Update product stock
  book.quantity -= quantity;
  book.inStock = book.quantity > 0;
  await book.save();

  return order;
};

// Calculate total revenue
export const calculateRevenueService = async () => {
  const revenue = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } },
  ]);

  return revenue[0]?.totalRevenue || 0;
};
