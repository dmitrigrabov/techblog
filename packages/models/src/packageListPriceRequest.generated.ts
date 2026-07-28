import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type PackagePricingStructure1,
  packagePricingStructure1,
} from "packages/models/src/packagePricingStructure1.generated.ts";
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

export type PackageListPriceRequest = {
  productId: string;
  name: string;
  currency: Currency;
  structure: PackagePricingStructure1;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  integrationIds: Array<GenerateIntegrationIdRequest>;
  customMetricParameters: Array<PriceParameter>;
};

export const packageListPriceRequest = z.object({
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: packagePricingStructure1,
  billingFrequency: billingFrequency,
  billingType: billingType,
  integrationIds: z.array(generateIntegrationIdRequest),
  customMetricParameters: z.array(priceParameter),
});
