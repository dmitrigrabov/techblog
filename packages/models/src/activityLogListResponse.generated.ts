import {
  type ActivityLogResponse,
  activityLogResponse,
} from "packages/models/src/activityLogResponse.generated.ts";
import {
  type PaginationMeta2,
  paginationMeta2,
} from "packages/models/src/paginationMeta2.generated.ts";
import { z } from "zod";

export type ActivityLogListResponse = {
  items: Array<ActivityLogResponse>;
  pagination: PaginationMeta2;
};

export const activityLogListResponse = z.object({
  items: z.array(activityLogResponse),
  pagination: paginationMeta2,
});
