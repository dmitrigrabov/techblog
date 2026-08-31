import { type Invoice, invoice } from "packages/models/src/invoice.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListInvoiceEndpointListInvoicePaginatedResponseModel = {
  items: Array<Invoice>;
  pagination: PaginationMeta;
};

export const listInvoiceEndpointListInvoicePaginatedResponseModel = z.object({
  items: z.array(invoice),
  pagination: paginationMeta,
});
