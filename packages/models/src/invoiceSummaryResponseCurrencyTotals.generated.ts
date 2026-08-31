import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { z } from "zod";

export type InvoiceSummaryResponseCurrencyTotals = {
  currency: Currency;
  invoiceCount: number;
  grossTotal: number;
};

export const invoiceSummaryResponseCurrencyTotals = z.object({
  currency: currency,
  invoiceCount: z.number().int(),
  grossTotal: z.number(),
});
