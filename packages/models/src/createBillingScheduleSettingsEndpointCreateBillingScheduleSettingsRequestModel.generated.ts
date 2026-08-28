import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type CreateBillingScheduleSettingsEndpointCreateBillingScheduleSettingsRequestModel = {
  billingScheduleId: string;
  paymentProvider: PaymentProvider;
  autoCharge?: (boolean | null) | undefined;
};

export const createBillingScheduleSettingsEndpointCreateBillingScheduleSettingsRequestModel =
  z.object({
    billingScheduleId: z.string(),
    paymentProvider: paymentProvider,
    autoCharge: z.boolean().nullable().optional(),
  });
