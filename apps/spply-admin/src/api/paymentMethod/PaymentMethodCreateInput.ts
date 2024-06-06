import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutPaymentMethodsInput } from "./TransactionCreateNestedManyWithoutPaymentMethodsInput";

export type PaymentMethodCreateInput = {
  details?: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutPaymentMethodsInput;
  typeField?: "Option1" | null;
};
