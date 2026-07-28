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
  type GenerateIntegrationIdRequest,
  generateIntegrationIdRequest,
} from "packages/models/src/generateIntegrationIdRequest.generated.ts";
import {
  type PriceParameter,
  priceParameter,
} from "packages/models/src/priceParameter.generated.ts";
import {
  type UsageCalculationPeriod1,
  usageCalculationPeriod1,
} from "packages/models/src/usageCalculationPeriod1.generated.ts";
import { z } from "zod";

export type GraduatedListPriceRequest = {
  productId: string;
  name: string;
  currency: Currency;
  structure: GraduatedPricingStructure1;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  integrationIds: Array<GenerateIntegrationIdRequest>;
  customMetricParameters: Array<PriceParameter>;
  usageCalculationPeriod?: UsageCalculationPeriod1 | undefined;
};

export const graduatedListPriceRequest = z.object({
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: graduatedPricingStructure1,
  billingFrequency: billingFrequency,
  billingType: billingType,
  integrationIds: z.array(generateIntegrationIdRequest),
  customMetricParameters: z.array(priceParameter),
  usageCalculationPeriod: usageCalculationPeriod1.optional(),
});
