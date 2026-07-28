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
  type GenerateIntegrationIdRequest,
  generateIntegrationIdRequest,
} from "packages/models/src/generateIntegrationIdRequest.generated.ts";
import {
  type PriceParameter,
  priceParameter,
} from "packages/models/src/priceParameter.generated.ts";
import { type PriceStatus, priceStatus } from "packages/models/src/priceStatus.generated.ts";
import { z } from "zod";

export type OneTimePriceRequest = {
  productId: string;
  name: string;
  currency: Currency;
  structure: OneTimePricingStructure;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  integrationIds?: Array<GenerateIntegrationIdRequest> | undefined;
  customMetricParameters?: Array<PriceParameter> | undefined;
  listPriceId?: string | undefined;
  status?: PriceStatus | undefined;
};

export const oneTimePriceRequest = z.object({
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: oneTimePricingStructure,
  billingFrequency: billingFrequency,
  billingType: billingType,
  integrationIds: z.array(generateIntegrationIdRequest).optional(),
  customMetricParameters: z.array(priceParameter).optional(),
  listPriceId: z.string().optional(),
  status: priceStatus.optional(),
});
