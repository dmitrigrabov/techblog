import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type LinearPricingStructure,
  linearPricingStructure,
} from "packages/models/src/linearPricingStructure.generated.ts";
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
import { type PriceStatus, priceStatus } from "packages/models/src/priceStatus.generated.ts";
import { z } from "zod";

export type LinearPriceResponse = {
  id: string;
  productId: string;
  name: string;
  currency: Currency;
  structure: LinearPricingStructure;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  createdAt: string;
  updatedAt?: string | undefined;
  integrationIds: Array<IntegrationId>;
  customMetricParameters: Array<PriceParameter>;
  listPriceId?: string | undefined;
  status: PriceStatus;
};

export const linearPriceResponse = z.object({
  id: z.string(),
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: linearPricingStructure,
  billingFrequency: billingFrequency,
  billingType: billingType,
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  integrationIds: z.array(integrationId),
  customMetricParameters: z.array(priceParameter),
  listPriceId: z.string().optional(),
  status: priceStatus,
});
