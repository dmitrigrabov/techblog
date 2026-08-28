import {
  type Stable20240101LineItemResponse,
  stable20240101LineItemResponse,
} from "packages/models/src/stable20240101LineItemResponse.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListLineItemEndpointPaginatedLineItemResponseModel = {
  items: Array<Stable20240101LineItemResponse>;
  pagination: PaginationMeta;
};

export const listLineItemEndpointPaginatedLineItemResponseModel = z.object({
  items: z.array(stable20240101LineItemResponse),
  pagination: paginationMeta,
});
