import {
  type InvoiceListSummaryResponseItem,
  invoiceListSummaryResponseItem,
} from "packages/models/src/invoiceListSummaryResponseItem.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type InvoiceListSummaryResponse = {
  items: Array<InvoiceListSummaryResponseItem>;
  pagination: PaginationMeta;
};

export const invoiceListSummaryResponse = z.object({
  items: z.array(invoiceListSummaryResponseItem),
  pagination: paginationMeta,
});
