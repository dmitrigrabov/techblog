import { type RetryAnchor, retryAnchor } from "packages/models/src/retryAnchor.generated.ts";
import { z } from "zod";

export type UpdateStripeCollectionSettingsEndpointUpdateStripeCollectionSettingsRequest = {
  enableAutomaticPayments?: (boolean | null) | undefined;
  autoEnableStripePayments?: (boolean | null) | undefined;
  retryAnchor?: RetryAnchor | undefined;
  retryOffsetDays?: (Array<number> | null) | undefined;
};

export const updateStripeCollectionSettingsEndpointUpdateStripeCollectionSettingsRequest = z.object(
  {
    enableAutomaticPayments: z.boolean().nullable().optional(),
    autoEnableStripePayments: z.boolean().nullable().optional(),
    retryAnchor: retryAnchor.optional(),
    retryOffsetDays: z.array(z.number().int()).nullable().optional(),
  },
);
