import {
  type PaymentFailureNotifications,
  paymentFailureNotifications,
} from "packages/models/src/paymentFailureNotifications.generated.ts";
import { z } from "zod";

export type UpdateAccountPaymentSettingsEndpointUpdateAccountPaymentSettingsRequest = {
  failureNotifications: PaymentFailureNotifications;
};

export const updateAccountPaymentSettingsEndpointUpdateAccountPaymentSettingsRequest = z.object({
  failureNotifications: paymentFailureNotifications,
});
