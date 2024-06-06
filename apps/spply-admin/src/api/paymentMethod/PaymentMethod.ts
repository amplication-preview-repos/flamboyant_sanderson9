import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type PaymentMethod = {
  createdAt: Date;
  details: JsonValue;
  id: string;
  transactions?: Array<Transaction>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
