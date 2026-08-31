import {
  type DueDatePolicyType,
  dueDatePolicyType,
} from "packages/models/src/dueDatePolicyType.generated.ts";
import { z } from "zod";

export type DueDatePolicyPaymentTerms = { paymentTermDays: number; type: DueDatePolicyType };

export const dueDatePolicyPaymentTerms = z.object({
  paymentTermDays: z.number().int(),
  type: dueDatePolicyType,
});
