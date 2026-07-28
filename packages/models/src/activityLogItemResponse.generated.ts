import {
  type ActivityLogActorResponse,
  activityLogActorResponse,
} from "packages/models/src/activityLogActorResponse.generated.ts";
import {
  type ActivityLogObjectResponse,
  activityLogObjectResponse,
} from "packages/models/src/activityLogObjectResponse.generated.ts";
import {
  type ActivityLogTargetResponse,
  activityLogTargetResponse,
} from "packages/models/src/activityLogTargetResponse.generated.ts";
import { z } from "zod";

export type ActivityLogItemResponse = {
  id: string;
  activityLogId: string;
  verb: string;
  name: string;
  summary: string;
  reason?: string | undefined;
  metadata?: Array<unknown> | undefined;
  activityLogActor: ActivityLogActorResponse;
  activityLogObject: ActivityLogObjectResponse;
  activityLogTarget?: ActivityLogTargetResponse | undefined;
};

export const activityLogItemResponse = z.object({
  id: z.string(),
  activityLogId: z.string(),
  verb: z.string(),
  name: z.string(),
  summary: z.string(),
  reason: z.string().optional(),
  metadata: z.array(z.unknown()).optional(),
  activityLogActor: activityLogActorResponse,
  activityLogObject: activityLogObjectResponse,
  activityLogTarget: activityLogTargetResponse.optional(),
});
