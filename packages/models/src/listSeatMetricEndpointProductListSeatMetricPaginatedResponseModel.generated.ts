import {
  type ListSeatMetricEndpointProductListSeatMetricResponseModel,
  listSeatMetricEndpointProductListSeatMetricResponseModel,
} from "packages/models/src/listSeatMetricEndpointProductListSeatMetricResponseModel.generated.ts";
import {
  type PaginationMeta1,
  paginationMeta1,
} from "packages/models/src/paginationMeta1.generated.ts";
import { z } from "zod";

export type ListSeatMetricEndpointProductListSeatMetricPaginatedResponseModel = {
  items: Array<ListSeatMetricEndpointProductListSeatMetricResponseModel>;
  pagination: PaginationMeta1;
};

export const listSeatMetricEndpointProductListSeatMetricPaginatedResponseModel = z.object({
  items: z.array(listSeatMetricEndpointProductListSeatMetricResponseModel),
  pagination: paginationMeta1,
});
