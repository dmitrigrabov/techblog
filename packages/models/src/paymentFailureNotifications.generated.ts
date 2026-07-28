import {
  type PaymentFailureNotificationOptions,
  paymentFailureNotificationOptions,
} from "packages/models/src/paymentFailureNotificationOptions.generated.ts";
import { z } from "zod";

export type PaymentFailureNotifications = {
  merchantNotifications: PaymentFailureNotificationOptions;
  customerNotifications: PaymentFailureNotificationOptions;
};

export const paymentFailureNotifications = z.object({
  merchantNotifications: paymentFailureNotificationOptions,
  customerNotifications: paymentFailureNotificationOptions,
});
