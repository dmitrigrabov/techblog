import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type CreateCustomerSettingsEndpointCreateCustomerSettingsRequestModel = {
  customerId: string;
  paymentProvider: PaymentProvider;
};

export const createCustomerSettingsEndpointCreateCustomerSettingsRequestModel = z.object({
  customerId: z.string(),
  paymentProvider: paymentProvider,
});
