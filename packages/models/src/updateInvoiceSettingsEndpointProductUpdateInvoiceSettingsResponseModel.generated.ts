import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type UpdateInvoiceSettingsEndpointProductUpdateInvoiceSettingsResponseModel = {
  id: string;
  sequenceAccountId: string;
  invoiceId: string;
  customerId: string;
  paymentProvider: PaymentProvider;
};

export const updateInvoiceSettingsEndpointProductUpdateInvoiceSettingsResponseModel = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  invoiceId: z.string(),
  customerId: z.string(),
  paymentProvider: paymentProvider,
});
