import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type VolumePricingStructure,
  volumePricingStructure,
} from "packages/models/src/volumePricingStructure.generated.ts";
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

export type VolumeListPriceRequest = {
  productId: string;
  name: string;
  currency: Currency;
  structure: VolumePricingStructure;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  integrationIds: Array<GenerateIntegrationIdRequest1>;
  customMetricParameters: Array<PriceParameter>;
};

export const volumeListPriceRequest = z.object({
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: volumePricingStructure,
  billingFrequency: billingFrequency,
  billingType: billingType,
  integrationIds: z.array(generateIntegrationIdRequest1),
  customMetricParameters: z.array(priceParameter),
});
