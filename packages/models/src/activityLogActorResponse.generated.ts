import { z } from "zod";

export type ActivityLogActorResponse = {
  id: string;
  entityType: string;
  entityId?: string | undefined;
  email?: string | undefined;
};

export const activityLogActorResponse = z.object({
  id: z.string(),
  entityType: z.string(),
  entityId: z.string().optional(),
  email: z.string().optional(),
});
