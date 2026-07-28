import { type CreditType, creditType } from "packages/models/src/creditType.generated.ts";
import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { z } from "zod";

export type CreditGrant2 = {
  id: string;
  sequenceAccountId: string;
  customerId: string;
  type: CreditType;
  currency: Currency;
  metricId?: string | undefined;
  name: string;
  originalAmount: string;
  currentBalance: string;
  expiryDate?: string | undefined;
  costOfCredit: string;
  taxRateId?: string | undefined;
  effectiveDate?: string | undefined;
  createdAt: string;
};

export const creditGrant2 = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  customerId: z.string(),
  type: creditType,
  currency: currency,
  metricId: z.string().optional(),
  name: z.string(),
  originalAmount: z.string(),
  currentBalance: z.string(),
  expiryDate: z.string().optional(),
  costOfCredit: z.string(),
  taxRateId: z.string().optional(),
  effectiveDate: z.string().optional(),
  createdAt: z.string(),
});
