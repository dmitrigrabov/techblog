import { z } from "zod";

export type ActivityLogObjectResponse = {
  id: string;
  entityType: string;
  entityId?: string | undefined;
};

export const activityLogObjectResponse = z.object({
  id: z.string(),
  entityType: z.string(),
  entityId: z.string().optional(),
});
