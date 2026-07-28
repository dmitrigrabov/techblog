import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type UpdateCustomerSettingsEndpointUpdateCustomerSettingsRequestModel = {
  paymentProvider: PaymentProvider;
};

export const updateCustomerSettingsEndpointUpdateCustomerSettingsRequestModel = z.object({
  paymentProvider: paymentProvider,
});
