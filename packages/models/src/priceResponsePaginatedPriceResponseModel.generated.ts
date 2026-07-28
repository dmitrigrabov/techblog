import { type PriceResponse, priceResponse } from "packages/models/src/priceResponse.generated.ts";
import {
  type PaginationMeta1,
  paginationMeta1,
} from "packages/models/src/paginationMeta1.generated.ts";
import { z } from "zod";

export type PriceResponsePaginatedPriceResponseModel = {
  items: Array<PriceResponse>;
  pagination: PaginationMeta1;
};

export const priceResponsePaginatedPriceResponseModel = z.object({
  items: z.array(priceResponse),
  pagination: paginationMeta1,
});
