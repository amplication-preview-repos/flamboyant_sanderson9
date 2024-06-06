import { Transaction } from "../transaction/Transaction";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
