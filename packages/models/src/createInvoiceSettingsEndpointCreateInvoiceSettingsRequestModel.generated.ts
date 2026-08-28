import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type CreateInvoiceSettingsEndpointCreateInvoiceSettingsRequestModel = {
  invoiceId: string;
  customerId?: (string | null) | undefined;
  paymentProvider: PaymentProvider;
};

export const createInvoiceSettingsEndpointCreateInvoiceSettingsRequestModel = z.object({
  invoiceId: z.string(),
  customerId: z.string().nullable().optional(),
  paymentProvider: paymentProvider,
});
