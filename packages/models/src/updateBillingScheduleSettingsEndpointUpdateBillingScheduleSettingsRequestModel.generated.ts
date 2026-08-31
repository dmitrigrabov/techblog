import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type UpdateBillingScheduleSettingsEndpointUpdateBillingScheduleSettingsRequestModel = {
  paymentProvider: PaymentProvider;
  autoCharge?: (boolean | null) | undefined;
};

export const updateBillingScheduleSettingsEndpointUpdateBillingScheduleSettingsRequestModel =
  z.object({ paymentProvider: paymentProvider, autoCharge: z.boolean().nullable().optional() });
