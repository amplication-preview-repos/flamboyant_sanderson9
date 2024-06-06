import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type PaymentMethodWhereInput = {
  details?: JsonFilter;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
  typeField?: "Option1";
};
