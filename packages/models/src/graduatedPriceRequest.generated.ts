import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type GraduatedPricingStructure1,
  graduatedPricingStructure1,
} from "packages/models/src/graduatedPricingStructure1.generated.ts";
import {
  type BillingFrequency,
  billingFrequency,
} from "packages/models/src/billingFrequency.generated.ts";
import { type BillingType, billingType } from "packages/models/src/billingType.generated.ts";
import {
  type GenerateIntegrationIdRequest2,
  generateIntegrationIdRequest2,
} from "packages/models/src/generateIntegrationIdRequest2.generated.ts";
import {
  type PriceParameter,
  priceParameter,
} from "packages/models/src/priceParameter.generated.ts";
import {
  type UsageCalculationPeriod1,
  usageCalculationPeriod1,
} from "packages/models/src/usageCalculationPeriod1.generated.ts";
import { type PriceStatus, priceStatus } from "packages/models/src/priceStatus.generated.ts";
import { z } from "zod";

export type GraduatedPriceRequest = {
  productId: string;
  name: string;
  currency: Currency;
  structure: GraduatedPricingStructure1;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  integrationIds?: Array<GenerateIntegrationIdRequest2> | undefined;
  customMetricParameters?: Array<PriceParameter> | undefined;
  listPriceId?: string | undefined;
  usageCalculationPeriod?: UsageCalculationPeriod1 | undefined;
  status?: PriceStatus | undefined;
};

export const graduatedPriceRequest = z.object({
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: graduatedPricingStructure1,
  billingFrequency: billingFrequency,
  billingType: billingType,
  integrationIds: z.array(generateIntegrationIdRequest2).optional(),
  customMetricParameters: z.array(priceParameter).optional(),
  listPriceId: z.string().optional(),
  usageCalculationPeriod: usageCalculationPeriod1.optional(),
  status: priceStatus.optional(),
});
