import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type OneTimePricingStructure1,
  oneTimePricingStructure1,
} from "packages/models/src/oneTimePricingStructure1.generated.ts";
import {
  type BillingFrequency,
  billingFrequency,
} from "packages/models/src/billingFrequency.generated.ts";
import { type BillingType, billingType } from "packages/models/src/billingType.generated.ts";
import {
  type IntegrationId2,
  integrationId2,
} from "packages/models/src/integrationId2.generated.ts";
import {
  type PriceParameter,
  priceParameter,
} from "packages/models/src/priceParameter.generated.ts";
import { type PriceStatus, priceStatus } from "packages/models/src/priceStatus.generated.ts";
import { z } from "zod";

export type OneTimePriceResponse = {
  id: string;
  productId: string;
  name: string;
  currency: Currency;
  structure: OneTimePricingStructure1;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  createdAt: string;
  updatedAt?: string | undefined;
  integrationIds: Array<IntegrationId2>;
  customMetricParameters: Array<PriceParameter>;
  listPriceId?: string | undefined;
  status: PriceStatus;
};

export const oneTimePriceResponse = z.object({
  id: z.string(),
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: oneTimePricingStructure1,
  billingFrequency: billingFrequency,
  billingType: billingType,
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  integrationIds: z.array(integrationId2),
  customMetricParameters: z.array(priceParameter),
  listPriceId: z.string().optional(),
  status: priceStatus,
});
