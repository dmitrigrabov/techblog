import {
  type InvoiceListSummaryResponseItem,
  invoiceListSummaryResponseItem,
} from "packages/models/src/invoiceListSummaryResponseItem.generated.ts";
import {
  type PaginationMeta4,
  paginationMeta4,
} from "packages/models/src/paginationMeta4.generated.ts";
import { z } from "zod";

export type InvoiceListSummaryResponse = {
  items: Array<InvoiceListSummaryResponseItem>;
  pagination: PaginationMeta4;
};

export const invoiceListSummaryResponse = z.object({
  items: z.array(invoiceListSummaryResponseItem),
  pagination: paginationMeta4,
});
