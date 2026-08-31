import {
  type AppliedCreditGrantStatus,
  appliedCreditGrantStatus,
} from "packages/models/src/appliedCreditGrantStatus.generated.ts";
import { z } from "zod";

export type AppliedCreditGrantResponse = {
  creditGrantId?: string | undefined;
  creditGrantName?: string | undefined;
  amount: string;
  taxAmount?: string | undefined;
  status: AppliedCreditGrantStatus;
};

export const appliedCreditGrantResponse = z.object({
  creditGrantId: z.string().optional(),
  creditGrantName: z.string().optional(),
  amount: z.string(),
  taxAmount: z.string().optional(),
  status: appliedCreditGrantStatus,
});
