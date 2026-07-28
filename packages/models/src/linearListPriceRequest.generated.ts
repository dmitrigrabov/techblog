import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type LinearPricingStructure1,
  linearPricingStructure1,
} from "packages/models/src/linearPricingStructure1.generated.ts";
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
import { z } from "zod";

export type LinearListPriceRequest = {
  productId: string;
  name: string;
  currency: Currency;
  structure: LinearPricingStructure1;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  integrationIds: Array<GenerateIntegrationIdRequest>;
  customMetricParameters: Array<PriceParameter>;
};

export const linearListPriceRequest = z.object({
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: linearPricingStructure1,
  billingFrequency: billingFrequency,
  billingType: billingType,
  integrationIds: z.array(generateIntegrationIdRequest),
  customMetricParameters: z.array(priceParameter),
});
