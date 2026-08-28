import {
  type CreditUnitType,
  creditUnitType,
} from "packages/models/src/creditUnitType.generated.ts";
import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type IntegrationId2,
  integrationId2,
} from "packages/models/src/integrationId2.generated.ts";
import { z } from "zod";

export type CreditGrantResponse2 = {
  id: string;
  sequenceAccountId: string;
  customerId: string;
  name: string;
  creditUnitType: CreditUnitType;
  currency?: Currency | undefined;
  metricId?: string | undefined;
  amount: number;
  costOfCredit?: number | undefined;
  effectiveDate?: string | undefined;
  expiryDate?: string | undefined;
  createdAt: string;
  integrationIds: Array<IntegrationId2>;
};

export const creditGrantResponse2 = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  customerId: z.string(),
  name: z.string(),
  creditUnitType: creditUnitType,
  currency: currency.optional(),
  metricId: z.string().optional(),
  amount: z.number(),
  costOfCredit: z.number().optional(),
  effectiveDate: z.string().optional(),
  expiryDate: z.string().optional(),
  createdAt: z.string(),
  integrationIds: z.array(integrationId2),
});
