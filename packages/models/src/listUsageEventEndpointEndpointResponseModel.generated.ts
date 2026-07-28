import {
  type CreateUsageEventEndpointProductCreateUsageEventResponseModel,
  createUsageEventEndpointProductCreateUsageEventResponseModel,
} from "packages/models/src/createUsageEventEndpointProductCreateUsageEventResponseModel.generated.ts";
import {
  type PaginationMeta2,
  paginationMeta2,
} from "packages/models/src/paginationMeta2.generated.ts";
import { z } from "zod";

export type ListUsageEventEndpointEndpointResponseModel = {
  items: Array<CreateUsageEventEndpointProductCreateUsageEventResponseModel>;
  pagination: PaginationMeta2;
};

export const listUsageEventEndpointEndpointResponseModel = z.object({
  items: z.array(createUsageEventEndpointProductCreateUsageEventResponseModel),
  pagination: paginationMeta2,
});
