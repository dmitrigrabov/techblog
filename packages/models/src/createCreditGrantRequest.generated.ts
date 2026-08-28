import {
  type CreditUnitType,
  creditUnitType,
} from "packages/models/src/creditUnitType.generated.ts";
import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { z } from "zod";

export type CreateCreditGrantRequest = {
  sequenceAccountId: string;
  customerId: string;
  name: string;
  creditUnitType: CreditUnitType;
  currency: Currency;
  metricId?: string | undefined;
  amount: number;
  costOfCredit?: number | undefined;
  effectiveDate?: string | undefined;
  expiryDate?: string | undefined;
  createInvoice?: boolean | undefined;
};

export const createCreditGrantRequest = z.object({
  sequenceAccountId: z.string(),
  customerId: z.string(),
  name: z.string(),
  creditUnitType: creditUnitType,
  currency: currency,
  metricId: z.string().optional(),
  amount: z.number(),
  costOfCredit: z.number().optional(),
  effectiveDate: z.string().optional(),
  expiryDate: z.string().optional(),
  createInvoice: z.boolean().optional(),
});
