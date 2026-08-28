import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type OneTimePricingStructure,
  oneTimePricingStructure,
} from "packages/models/src/oneTimePricingStructure.generated.ts";
import {
  type BillingFrequency,
  billingFrequency,
} from "packages/models/src/billingFrequency.generated.ts";
import { type BillingType, billingType } from "packages/models/src/billingType.generated.ts";
import {
  type GenerateIntegrationIdRequest1,
  generateIntegrationIdRequest1,
} from "packages/models/src/generateIntegrationIdRequest1.generated.ts";
import {
  type PriceParameter,
  priceParameter,
} from "packages/models/src/priceParameter.generated.ts";
import { z } from "zod";

export type OneTimeListPriceRequest = {
  productId: string;
  name: string;
  currency: Currency;
  structure: OneTimePricingStructure;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  integrationIds: Array<GenerateIntegrationIdRequest1>;
  customMetricParameters: Array<PriceParameter>;
};

export const oneTimeListPriceRequest = z.object({
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: oneTimePricingStructure,
  billingFrequency: billingFrequency,
  billingType: billingType,
  integrationIds: z.array(generateIntegrationIdRequest1),
  customMetricParameters: z.array(priceParameter),
});
