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
  type GenerateIntegrationIdRequest2,
  generateIntegrationIdRequest2,
} from "packages/models/src/generateIntegrationIdRequest2.generated.ts";
import {
  type PriceParameter,
  priceParameter,
} from "packages/models/src/priceParameter.generated.ts";
import { type PriceStatus, priceStatus } from "packages/models/src/priceStatus.generated.ts";
import { z } from "zod";

export type LinearPriceRequest = {
  productId: string;
  name: string;
  currency: Currency;
  structure: LinearPricingStructure1;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  integrationIds?: Array<GenerateIntegrationIdRequest2> | undefined;
  customMetricParameters?: Array<PriceParameter> | undefined;
  listPriceId?: string | undefined;
  status?: PriceStatus | undefined;
};

export const linearPriceRequest = z.object({
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: linearPricingStructure1,
  billingFrequency: billingFrequency,
  billingType: billingType,
  integrationIds: z.array(generateIntegrationIdRequest2).optional(),
  customMetricParameters: z.array(priceParameter).optional(),
  listPriceId: z.string().optional(),
  status: priceStatus.optional(),
});
