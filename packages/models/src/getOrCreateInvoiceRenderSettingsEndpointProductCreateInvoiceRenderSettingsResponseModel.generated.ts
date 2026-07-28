import {
  type PaymentLinkDisplayOption,
  paymentLinkDisplayOption,
} from "packages/models/src/paymentLinkDisplayOption.generated.ts";
import { z } from "zod";

export type GetOrCreateInvoiceRenderSettingsEndpointProductCreateInvoiceRenderSettingsResponseModel =
  { id: string; paymentLinkDisplay: PaymentLinkDisplayOption };

export const getOrCreateInvoiceRenderSettingsEndpointProductCreateInvoiceRenderSettingsResponseModel =
  z.object({ id: z.string(), paymentLinkDisplay: paymentLinkDisplayOption });
