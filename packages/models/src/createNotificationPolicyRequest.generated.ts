import {
  type NotificationType,
  notificationType,
} from "packages/models/src/notificationType.generated.ts";
import {
  type NotificationChannel,
  notificationChannel,
} from "packages/models/src/notificationChannel.generated.ts";
import { z } from "zod";

export type CreateNotificationPolicyRequest = {
  name: string;
  notificationTypes?: Array<NotificationType> | undefined;
  recipients: Array<string>;
  channel: NotificationChannel;
  webhookSecret?: string | undefined;
};

export const createNotificationPolicyRequest = z.object({
  name: z.string(),
  notificationTypes: z.array(notificationType).optional(),
  recipients: z.array(z.string()),
  channel: notificationChannel,
  webhookSecret: z.string().optional(),
});
