import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { z } from "zod";

export type InvoiceCurrencyConversionResponse = {
  id: string;
  invoiceId: string;
  currency: Currency;
  totalTax: string;
  netTotal: string;
  grossTotal: string;
  exchangeRate: string;
  updatedAt: string;
};

export const invoiceCurrencyConversionResponse = z.object({
  id: z.string(),
  invoiceId: z.string(),
  currency: currency,
  totalTax: z.string(),
  netTotal: z.string(),
  grossTotal: z.string(),
  exchangeRate: z.string(),
  updatedAt: z.string(),
});
