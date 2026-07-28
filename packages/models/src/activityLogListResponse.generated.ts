import {
  type ActivityLogResponse,
  activityLogResponse,
} from "packages/models/src/activityLogResponse.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ActivityLogListResponse = {
  items: Array<ActivityLogResponse>;
  pagination: PaginationMeta;
};

export const activityLogListResponse = z.object({
  items: z.array(activityLogResponse),
  pagination: paginationMeta,
});
