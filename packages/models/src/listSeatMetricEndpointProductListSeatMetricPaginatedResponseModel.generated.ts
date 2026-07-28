import {
  type ListSeatMetricEndpointProductListSeatMetricResponseModel,
  listSeatMetricEndpointProductListSeatMetricResponseModel,
} from "packages/models/src/listSeatMetricEndpointProductListSeatMetricResponseModel.generated.ts";
import {
  type PaginationMeta2,
  paginationMeta2,
} from "packages/models/src/paginationMeta2.generated.ts";
import { z } from "zod";

export type ListSeatMetricEndpointProductListSeatMetricPaginatedResponseModel = {
  items: Array<ListSeatMetricEndpointProductListSeatMetricResponseModel>;
  pagination: PaginationMeta2;
};

export const listSeatMetricEndpointProductListSeatMetricPaginatedResponseModel = z.object({
  items: z.array(listSeatMetricEndpointProductListSeatMetricResponseModel),
  pagination: paginationMeta2,
});
