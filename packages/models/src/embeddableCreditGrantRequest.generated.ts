import {
  type CreditUnitType,
  creditUnitType,
} from "packages/models/src/creditUnitType.generated.ts";
import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type GrantRefreshFrequency,
  grantRefreshFrequency,
} from "packages/models/src/grantRefreshFrequency.generated.ts";
import {
  type GrantBillingFrequency,
  grantBillingFrequency,
} from "packages/models/src/grantBillingFrequency.generated.ts";
import { type RolloverMode, rolloverMode } from "packages/models/src/rolloverMode.generated.ts";
import { z } from "zod";

export type EmbeddableCreditGrantRequest = {
  name: string;
  creditUnitType: CreditUnitType;
  currency?: Currency | undefined;
  amount: number;
  costOfCredit?: number | undefined;
  taxRateId?: string | undefined;
  grantRefreshFrequency: GrantRefreshFrequency;
  billingFrequency?: GrantBillingFrequency | undefined;
  rolloverMode: RolloverMode;
  restrictToPrices?: Array<string> | undefined;
};

export const embeddableCreditGrantRequest = z.object({
  name: z.string(),
  creditUnitType: creditUnitType,
  currency: currency.optional(),
  amount: z.number(),
  costOfCredit: z.number().optional(),
  taxRateId: z.string().optional(),
  grantRefreshFrequency: grantRefreshFrequency,
  billingFrequency: grantBillingFrequency.optional(),
  rolloverMode: rolloverMode,
  restrictToPrices: z.array(z.string()).optional(),
});
