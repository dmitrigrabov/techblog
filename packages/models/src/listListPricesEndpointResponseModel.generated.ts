import { type ListPrice, listPrice } from "packages/models/src/listPrice.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListListPricesEndpointResponseModel = {
  items: Array<ListPrice>;
  pagination: PaginationMeta;
};

export const listListPricesEndpointResponseModel = z.object({
  items: z.array(listPrice),
  pagination: paginationMeta,
});
