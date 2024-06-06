import { Customer } from "../customer/Customer";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  paymentMethod?: PaymentMethod | null;
  updatedAt: Date;
};
