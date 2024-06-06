import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutPaymentMethodsInput } from "./TransactionUpdateManyWithoutPaymentMethodsInput";

export type PaymentMethodUpdateInput = {
  details?: InputJsonValue;
  transactions?: TransactionUpdateManyWithoutPaymentMethodsInput;
  typeField?: "Option1" | null;
};
