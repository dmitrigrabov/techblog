import {
  type PaymentProvider,
  paymentProvider,
} from "packages/models/src/paymentProvider.generated.ts";
import { z } from "zod";

export type BillingScheduleSettings = {
  id: string;
  sequenceAccountId: string;
  billingScheduleId: string;
  paymentProvider: PaymentProvider;
  autoCharge: boolean;
};

export const billingScheduleSettings = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  billingScheduleId: z.string(),
  paymentProvider: paymentProvider,
  autoCharge: z.boolean(),
});
