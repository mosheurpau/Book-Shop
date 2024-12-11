

export interface IOrder {
  email: string;
  product: string; 
  quantity: number;
  totalPrice: number;
  createdAt?: Date | undefined; 
  updatedAt?: Date | undefined; 
}