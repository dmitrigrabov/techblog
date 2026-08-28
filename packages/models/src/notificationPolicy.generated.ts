import {
  type NotificationType,
  notificationType,
} from "packages/models/src/notificationType.generated.ts";
import {
  type NotificationChannel,
  notificationChannel,
} from "packages/models/src/notificationChannel.generated.ts";
import { z } from "zod";

export type NotificationPolicy = {
  id: string;
  createdAt: string;
  sequenceAccountId: string;
  name: string;
  notificationTypes?: Array<NotificationType> | undefined;
  recipients: Array<string>;
  channel: NotificationChannel;
  webhookSecret?: string | undefined;
};

export const notificationPolicy = z.object({
  id: z.string(),
  createdAt: z.string(),
  sequenceAccountId: z.string(),
  name: z.string(),
  notificationTypes: z.array(notificationType).optional(),
  recipients: z.array(z.string()),
  channel: notificationChannel,
  webhookSecret: z.string().optional(),
});
