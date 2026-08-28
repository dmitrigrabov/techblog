import {
  type DiscountResponse,
  discountResponse,
} from "packages/models/src/discountResponse.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListDiscountsResponse = { items: Array<DiscountResponse>; pagination: PaginationMeta };

export const listDiscountsResponse = z.object({
  items: z.array(discountResponse),
  pagination: paginationMeta,
});
