import {
  type CreateUsageEventEndpointProductCreateUsageEventResponseModel,
  createUsageEventEndpointProductCreateUsageEventResponseModel,
} from "packages/models/src/createUsageEventEndpointProductCreateUsageEventResponseModel.generated.ts";
import {
  type PaginationMeta1,
  paginationMeta1,
} from "packages/models/src/paginationMeta1.generated.ts";
import { z } from "zod";

export type ListUsageEventEndpointEndpointResponseModel = {
  items: Array<CreateUsageEventEndpointProductCreateUsageEventResponseModel>;
  pagination: PaginationMeta1;
};

export const listUsageEventEndpointEndpointResponseModel = z.object({
  items: z.array(createUsageEventEndpointProductCreateUsageEventResponseModel),
  pagination: paginationMeta1,
});
