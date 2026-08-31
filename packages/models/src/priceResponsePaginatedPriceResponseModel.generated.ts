import { type PriceResponse, priceResponse } from "packages/models/src/priceResponse.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type PriceResponsePaginatedPriceResponseModel = {
  items: Array<PriceResponse>;
  pagination: PaginationMeta;
};

export const priceResponsePaginatedPriceResponseModel = z.object({
  items: z.array(priceResponse),
  pagination: paginationMeta,
});
