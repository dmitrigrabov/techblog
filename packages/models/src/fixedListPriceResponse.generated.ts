import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type FixedPricingStructure,
  fixedPricingStructure,
} from "packages/models/src/fixedPricingStructure.generated.ts";
import {
  type BillingFrequency,
  billingFrequency,
} from "packages/models/src/billingFrequency.generated.ts";
import { type BillingType, billingType } from "packages/models/src/billingType.generated.ts";
import {
  type IntegrationId1,
  integrationId1,
} from "packages/models/src/integrationId1.generated.ts";
import {
  type PriceParameter,
  priceParameter,
} from "packages/models/src/priceParameter.generated.ts";
import { z } from "zod";

export type FixedListPriceResponse = {
  id: string;
  productId: string;
  name: string;
  currency: Currency;
  structure: FixedPricingStructure;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  createdAt: string;
  updatedAt: string;
  integrationIds: Array<IntegrationId1>;
  customMetricParameters: Array<PriceParameter>;
};

export const fixedListPriceResponse = z.object({
  id: z.string(),
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: fixedPricingStructure,
  billingFrequency: billingFrequency,
  billingType: billingType,
  createdAt: z.string(),
  updatedAt: z.string(),
  integrationIds: z.array(integrationId1),
  customMetricParameters: z.array(priceParameter),
});
