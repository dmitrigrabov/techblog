import {
  type ActivityLogItemResponse,
  activityLogItemResponse,
} from "packages/models/src/activityLogItemResponse.generated.ts";
import { z } from "zod";

export type ActivityLogResponse = {
  id: string;
  sequenceAccountId: string;
  activityType: string;
  apiVersion?: string | undefined;
  origin: string;
  traceId?: string | undefined;
  createdAt: string;
  activityLogItems: Array<ActivityLogItemResponse>;
};

export const activityLogResponse = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  activityType: z.string(),
  apiVersion: z.string().optional(),
  origin: z.string(),
  traceId: z.string().optional(),
  createdAt: z.string(),
  activityLogItems: z.array(activityLogItemResponse),
});
