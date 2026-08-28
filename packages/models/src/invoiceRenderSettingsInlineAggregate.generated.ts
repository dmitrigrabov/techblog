import {
  type PaymentLinkDisplayOption,
  paymentLinkDisplayOption,
} from "packages/models/src/paymentLinkDisplayOption.generated.ts";
import { z } from "zod";

export type InvoiceRenderSettingsInlineAggregate = { paymentLinkDisplay: PaymentLinkDisplayOption };

export const invoiceRenderSettingsInlineAggregate = z.object({
  paymentLinkDisplay: paymentLinkDisplayOption,
});
