import { type Invoice, invoice } from "packages/models/src/invoice.generated.ts";
import {
  type PaginationMeta4,
  paginationMeta4,
} from "packages/models/src/paginationMeta4.generated.ts";
import { z } from "zod";

export type ListInvoiceEndpointListInvoicePaginatedResponseModel = {
  items: Array<Invoice>;
  pagination: PaginationMeta4;
};

export const listInvoiceEndpointListInvoicePaginatedResponseModel = z.object({
  items: z.array(invoice),
  pagination: paginationMeta4,
});
