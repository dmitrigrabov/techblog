import {
  type InvoiceCurrencyConversionResponse,
  invoiceCurrencyConversionResponse,
} from "packages/models/src/invoiceCurrencyConversionResponse.generated.ts";
import { z } from "zod";

export type InvoiceCurrencyConversionsListResponse = {
  items: Array<InvoiceCurrencyConversionResponse>;
};

export const invoiceCurrencyConversionsListResponse = z.object({
  items: z.array(invoiceCurrencyConversionResponse),
});
