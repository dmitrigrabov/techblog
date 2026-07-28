import {
  type PaymentLinkDisplayOption,
  paymentLinkDisplayOption,
} from "packages/models/src/paymentLinkDisplayOption.generated.ts";
import { z } from "zod";

export type UpdateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel = {
  paymentLinkDisplay: PaymentLinkDisplayOption;
};

export const updateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel = z.object({
  paymentLinkDisplay: paymentLinkDisplayOption,
});
