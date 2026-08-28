import {
  type CreditTransactionType,
  creditTransactionType,
} from "packages/models/src/creditTransactionType.generated.ts";
import { z } from "zod";

export type CreditTransaction = {
  id?: string | undefined;
  grantId: string;
  reason?: string | undefined;
  invoiceId?: string | undefined;
  billingRunId?: string | undefined;
  type: CreditTransactionType;
  amount: string;
  date: string;
};

export const creditTransaction = z.object({
  id: z.string().optional(),
  grantId: z.string(),
  reason: z.string().optional(),
  invoiceId: z.string().optional(),
  billingRunId: z.string().optional(),
  type: creditTransactionType,
  amount: z.string(),
  date: z.string(),
});
