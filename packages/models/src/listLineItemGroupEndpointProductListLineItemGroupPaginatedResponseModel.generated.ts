import {
  type LineItemGroupResponseModel,
  lineItemGroupResponseModel,
} from "packages/models/src/lineItemGroupResponseModel.generated.ts";
import {
  type PaginationMeta4,
  paginationMeta4,
} from "packages/models/src/paginationMeta4.generated.ts";
import { z } from "zod";

export type ListLineItemGroupEndpointProductListLineItemGroupPaginatedResponseModel = {
  items: Array<LineItemGroupResponseModel>;
  pagination: PaginationMeta4;
};

export const listLineItemGroupEndpointProductListLineItemGroupPaginatedResponseModel = z.object({
  items: z.array(lineItemGroupResponseModel),
  pagination: paginationMeta4,
});
