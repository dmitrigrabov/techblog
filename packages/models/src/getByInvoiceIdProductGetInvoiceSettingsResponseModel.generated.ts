import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type GetByInvoiceIdProductGetInvoiceSettingsResponseModel = {
  id: string;
  sequenceAccountId: string;
  invoiceId: string;
  paymentProvider: PaymentProvider;
};

export const getByInvoiceIdProductGetInvoiceSettingsResponseModel = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  invoiceId: z.string(),
  paymentProvider: paymentProvider,
});
