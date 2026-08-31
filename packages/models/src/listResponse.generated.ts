import {
  type TaxRateResponse,
  taxRateResponse,
} from "packages/models/src/taxRateResponse.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListResponse = { items: Array<TaxRateResponse>; pagination: PaginationMeta };

export const listResponse = z.object({
  items: z.array(taxRateResponse),
  pagination: paginationMeta,
});
