import {
  type IntegrationPaymentStatus,
  integrationPaymentStatus,
} from "packages/models/src/integrationPaymentStatus.generated.ts";
import { z } from "zod";

export type IntegrationPaymentStatuses = {
  stripe?: IntegrationPaymentStatus | undefined;
  goCardless?: IntegrationPaymentStatus | undefined;
};

export const integrationPaymentStatuses = z.object({
  stripe: integrationPaymentStatus.optional(),
  goCardless: integrationPaymentStatus.optional(),
});
