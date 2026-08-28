import { z } from "zod";

export type PaymentFailureNotificationOptions = "SEND_NOTIFICATIONS" | "DO_NOT_SEND_NOTIFICATIONS";

export const paymentFailureNotificationOptions = z.enum([
  "SEND_NOTIFICATIONS",
  "DO_NOT_SEND_NOTIFICATIONS",
]);
