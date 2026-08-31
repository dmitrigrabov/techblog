import {
  type PaymentFailureNotifications,
  paymentFailureNotifications,
} from "packages/models/src/paymentFailureNotifications.generated.ts";
import { z } from "zod";

export type AccountPaymentSettings = {
  id: string;
  failureNotifications: PaymentFailureNotifications;
};

export const accountPaymentSettings = z.object({
  id: z.string(),
  failureNotifications: paymentFailureNotifications,
});
