import {
  type InvoiceSummaryResponseCurrencyTotals,
  invoiceSummaryResponseCurrencyTotals,
} from "packages/models/src/invoiceSummaryResponseCurrencyTotals.generated.ts";
import { z } from "zod";

export type InvoiceSummaryResponse = {
  totalsByCurrency: Array<InvoiceSummaryResponseCurrencyTotals>;
};

export const invoiceSummaryResponse = z.object({
  totalsByCurrency: z.array(invoiceSummaryResponseCurrencyTotals),
});
