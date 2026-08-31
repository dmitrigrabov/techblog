import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type GetCustomerSettingsEndpointProductGetCustomerSettingsResponseModel = {
  id: string;
  sequenceAccountId: string;
  customerId: string;
  paymentProvider: PaymentProvider;
};

export const getCustomerSettingsEndpointProductGetCustomerSettingsResponseModel = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  customerId: z.string(),
  paymentProvider: paymentProvider,
});
