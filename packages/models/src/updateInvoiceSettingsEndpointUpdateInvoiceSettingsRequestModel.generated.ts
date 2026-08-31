import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type UpdateInvoiceSettingsEndpointUpdateInvoiceSettingsRequestModel = {
  paymentProvider: PaymentProvider;
};

export const updateInvoiceSettingsEndpointUpdateInvoiceSettingsRequestModel = z.object({
  paymentProvider: paymentProvider,
});
