import {
  type BillingProduct,
  billingProduct,
} from "packages/models/src/billingProduct.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListBillingProductsResponse = {
  items: Array<BillingProduct>;
  pagination: PaginationMeta;
};

export const listBillingProductsResponse = z.object({
  items: z.array(billingProduct),
  pagination: paginationMeta,
});
