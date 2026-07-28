import { type CreditGrant, creditGrant } from "packages/models/src/creditGrant.generated.ts";
import {
  type PaginationMeta1,
  paginationMeta1,
} from "packages/models/src/paginationMeta1.generated.ts";
import { z } from "zod";

export type ListCreditGrantsResponse = { items: Array<CreditGrant>; pagination: PaginationMeta1 };

export const listCreditGrantsResponse = z.object({
  items: z.array(creditGrant),
  pagination: paginationMeta1,
});
