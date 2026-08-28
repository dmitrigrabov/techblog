import {
  type NotificationType,
  notificationType,
} from "packages/models/src/notificationType.generated.ts";
import { z } from "zod";

export type AddNotificationTypesToPolicyRequest = { notificationTypes: Array<NotificationType> };

export const addNotificationTypesToPolicyRequest = z.object({
  notificationTypes: z.array(notificationType),
});
