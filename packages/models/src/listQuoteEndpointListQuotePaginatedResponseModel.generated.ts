import {
  type ListQuoteEndpointListQuoteResponseModel,
  listQuoteEndpointListQuoteResponseModel,
} from "packages/models/src/listQuoteEndpointListQuoteResponseModel.generated.ts";
import {
  type PaginationMeta3,
  paginationMeta3,
} from "packages/models/src/paginationMeta3.generated.ts";
import { z } from "zod";

export type ListQuoteEndpointListQuotePaginatedResponseModel = {
  items: Array<ListQuoteEndpointListQuoteResponseModel>;
  pagination: PaginationMeta3;
};

export const listQuoteEndpointListQuotePaginatedResponseModel = z.object({
  items: z.array(listQuoteEndpointListQuoteResponseModel),
  pagination: paginationMeta3,
});
