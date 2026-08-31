import { z } from "zod";

export type NotificationChannel = "WEBHOOK" | "EMAIL";

export const notificationChannel = z.enum(["WEBHOOK", "EMAIL"]);
