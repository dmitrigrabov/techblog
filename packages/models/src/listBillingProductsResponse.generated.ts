import {
  type BillingProduct,
  billingProduct,
} from "packages/models/src/billingProduct.generated.ts";
import {
  type PaginationMeta1,
  paginationMeta1,
} from "packages/models/src/paginationMeta1.generated.ts";
import { z } from "zod";

export type ListBillingProductsResponse = {
  items: Array<BillingProduct>;
  pagination: PaginationMeta1;
};

export const listBillingProductsResponse = z.object({
  items: z.array(billingProduct),
  pagination: paginationMeta1,
});
