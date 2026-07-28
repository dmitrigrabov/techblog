import { type ListPrice, listPrice } from "packages/models/src/listPrice.generated.ts";
import {
  type PaginationMeta7,
  paginationMeta7,
} from "packages/models/src/paginationMeta7.generated.ts";
import { z } from "zod";

export type ListListPricesEndpointResponseModel = {
  items: Array<ListPrice>;
  pagination: PaginationMeta7;
};

export const listListPricesEndpointResponseModel = z.object({
  items: z.array(listPrice),
  pagination: paginationMeta7,
});
