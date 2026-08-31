import { type CreditGrant, creditGrant } from "packages/models/src/creditGrant.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListCreditGrantsResponse = { items: Array<CreditGrant>; pagination: PaginationMeta };

export const listCreditGrantsResponse = z.object({
  items: z.array(creditGrant),
  pagination: paginationMeta,
});
