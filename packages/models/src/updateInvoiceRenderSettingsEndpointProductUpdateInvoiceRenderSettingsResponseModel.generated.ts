import {
  type PaymentLinkDisplayOption,
  paymentLinkDisplayOption,
} from "packages/models/src/paymentLinkDisplayOption.generated.ts";
import { z } from "zod";

export type UpdateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel = {
  id: string;
  paymentLinkDisplay: PaymentLinkDisplayOption;
};

export const updateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel =
  z.object({ id: z.string(), paymentLinkDisplay: paymentLinkDisplayOption });
