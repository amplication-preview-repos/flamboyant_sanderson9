import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { PaymentMethodTitle } from "../paymentMethod/PaymentMethodTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
