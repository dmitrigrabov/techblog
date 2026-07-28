import {
  type CreditUnitType,
  creditUnitType,
} from "packages/models/src/creditUnitType.generated.ts";
import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { type IntegrationId, integrationId } from "packages/models/src/integrationId.generated.ts";
import { z } from "zod";

export type CreditGrant = {
  id: string;
  sequenceAccountId: string;
  customerId: string;
  name: string;
  creditUnitType: CreditUnitType;
  currency: Currency;
  metricId?: string | undefined;
  amount: number;
  costOfCredit: number;
  taxRateId?: string | undefined;
  effectiveDate?: string | undefined;
  expiryDate?: string | undefined;
  createdAt: string;
  creditNoteId?: string | undefined;
  integrationIds: Array<IntegrationId>;
};

export const creditGrant = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  customerId: z.string(),
  name: z.string(),
  creditUnitType: creditUnitType,
  currency: currency,
  metricId: z.string().optional(),
  amount: z.number(),
  costOfCredit: z.number(),
  taxRateId: z.string().optional(),
  effectiveDate: z.string().optional(),
  expiryDate: z.string().optional(),
  createdAt: z.string(),
  creditNoteId: z.string().optional(),
  integrationIds: z.array(integrationId),
});
