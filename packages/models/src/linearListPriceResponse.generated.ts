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
import { type IntegrationId, integrationId } from "packages/models/src/integrationId.generated.ts";
import {
  type PriceParameter,
  priceParameter,
} from "packages/models/src/priceParameter.generated.ts";
import { z } from "zod";

export type LinearListPriceResponse = {
  id: string;
  productId: string;
  name: string;
  currency: Currency;
  structure: LinearPricingStructure1;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  createdAt: string;
  updatedAt: string;
  integrationIds: Array<IntegrationId>;
  customMetricParameters: Array<PriceParameter>;
};

export const linearListPriceResponse = z.object({
  id: z.string(),
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: linearPricingStructure1,
  billingFrequency: billingFrequency,
  billingType: billingType,
  createdAt: z.string(),
  updatedAt: z.string(),
  integrationIds: z.array(integrationId),
  customMetricParameters: z.array(priceParameter),
});
