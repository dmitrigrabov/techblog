import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type GraduatedPricingStructure1,
  graduatedPricingStructure1,
} from "packages/models/src/graduatedPricingStructure1.generated.ts";
import {
  type BillingFrequency,
  billingFrequency,
} from "packages/models/src/billingFrequency.generated.ts";
import {
  type UsageCalculationPeriod1,
  usageCalculationPeriod1,
} from "packages/models/src/usageCalculationPeriod1.generated.ts";
import { type BillingType, billingType } from "packages/models/src/billingType.generated.ts";
import { type IntegrationId, integrationId } from "packages/models/src/integrationId.generated.ts";
import {
  type PriceParameter,
  priceParameter,
} from "packages/models/src/priceParameter.generated.ts";
import { z } from "zod";

export type GraduatedListPriceResponse = {
  id: string;
  productId: string;
  name: string;
  currency: Currency;
  structure: GraduatedPricingStructure1;
  billingFrequency: BillingFrequency;
  usageCalculationPeriod?: UsageCalculationPeriod1 | undefined;
  billingType: BillingType;
  createdAt: string;
  updatedAt: string;
  integrationIds: Array<IntegrationId>;
  customMetricParameters: Array<PriceParameter>;
};

export const graduatedListPriceResponse = z.object({
  id: z.string(),
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: graduatedPricingStructure1,
  billingFrequency: billingFrequency,
  usageCalculationPeriod: usageCalculationPeriod1.optional(),
  billingType: billingType,
  createdAt: z.string(),
  updatedAt: z.string(),
  integrationIds: z.array(integrationId),
  customMetricParameters: z.array(priceParameter),
});
