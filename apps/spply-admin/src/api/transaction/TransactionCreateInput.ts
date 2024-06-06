import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentMethodWhereUniqueInput } from "../paymentMethod/PaymentMethodWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  paymentMethod?: PaymentMethodWhereUniqueInput | null;
};
