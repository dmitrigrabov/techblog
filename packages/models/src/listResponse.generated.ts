import {
  type TaxRateResponse,
  taxRateResponse,
} from "packages/models/src/taxRateResponse.generated.ts";
import {
  type PaginationMeta6,
  paginationMeta6,
} from "packages/models/src/paginationMeta6.generated.ts";
import { z } from "zod";

export type ListResponse = { items: Array<TaxRateResponse>; pagination: PaginationMeta6 };

export const listResponse = z.object({
  items: z.array(taxRateResponse),
  pagination: paginationMeta6,
});
