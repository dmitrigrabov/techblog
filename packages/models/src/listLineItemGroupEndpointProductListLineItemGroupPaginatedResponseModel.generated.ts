import {
  type LineItemGroupResponseModel,
  lineItemGroupResponseModel,
} from "packages/models/src/lineItemGroupResponseModel.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListLineItemGroupEndpointProductListLineItemGroupPaginatedResponseModel = {
  items: Array<LineItemGroupResponseModel>;
  pagination: PaginationMeta;
};

export const listLineItemGroupEndpointProductListLineItemGroupPaginatedResponseModel = z.object({
  items: z.array(lineItemGroupResponseModel),
  pagination: paginationMeta,
});
