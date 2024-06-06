import { TransactionUpdateManyWithoutCustomersInput } from "./TransactionUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  name?: string | null;
  transactions?: TransactionUpdateManyWithoutCustomersInput;
};
