import {
  type ListQuoteEndpointListQuoteResponseModel,
  listQuoteEndpointListQuoteResponseModel,
} from "packages/models/src/listQuoteEndpointListQuoteResponseModel.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListQuoteEndpointListQuotePaginatedResponseModel = {
  items: Array<ListQuoteEndpointListQuoteResponseModel>;
  pagination: PaginationMeta;
};

export const listQuoteEndpointListQuotePaginatedResponseModel = z.object({
  items: z.array(listQuoteEndpointListQuoteResponseModel),
  pagination: paginationMeta,
});
