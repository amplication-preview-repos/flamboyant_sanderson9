import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { PaymentMethodTitle } from "../paymentMethod/PaymentMethodTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput
          source="paymentMethod.id"
          reference="PaymentMethod"
          label="PaymentMethod"
        >
          <SelectInput optionText={PaymentMethodTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
