import { z } from "zod";

export type ActivityLogTargetResponse = {
  id: string;
  entityType: string;
  entityId?: string | undefined;
};

export const activityLogTargetResponse = z.object({
  id: z.string(),
  entityType: z.string(),
  entityId: z.string().optional(),
});
