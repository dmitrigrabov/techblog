import { z } from "zod";

export type StripeCollectionSettings = {
  id: string;
  sequenceAccountId: string;
  enableAutomaticPayments: boolean;
  autoEnableStripePayments: boolean;
  retryOffsetDays: Array<unknown>;
};

export const stripeCollectionSettings = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  enableAutomaticPayments: z.boolean(),
  autoEnableStripePayments: z.boolean(),
  retryOffsetDays: z.array(z.unknown()),
});
