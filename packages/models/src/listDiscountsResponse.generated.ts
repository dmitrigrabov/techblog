import {
  type DiscountResponse,
  discountResponse,
} from "packages/models/src/discountResponse.generated.ts";
import {
  type PaginationMeta1,
  paginationMeta1,
} from "packages/models/src/paginationMeta1.generated.ts";
import { z } from "zod";

export type ListDiscountsResponse = { items: Array<DiscountResponse>; pagination: PaginationMeta1 };

export const listDiscountsResponse = z.object({
  items: z.array(discountResponse),
  pagination: paginationMeta1,
});
