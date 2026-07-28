import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type GraduatedPricingStructure,
  graduatedPricingStructure,
} from "packages/models/src/graduatedPricingStructure.generated.ts";
import {
  type VolumePricingStructure,
  volumePricingStructure,
} from "packages/models/src/volumePricingStructure.generated.ts";
import {
  type SeatBasedPricingStructure,
  seatBasedPricingStructure,
} from "packages/models/src/seatBasedPricingStructure.generated.ts";
import {
  type PackagePricingStructure,
  packagePricingStructure,
} from "packages/models/src/packagePricingStructure.generated.ts";
import {
  type LinearPricingStructure,
  linearPricingStructure,
} from "packages/models/src/linearPricingStructure.generated.ts";
import {
  type FixedPricingStructure,
  fixedPricingStructure,
} from "packages/models/src/fixedPricingStructure.generated.ts";
import {
  type OneTimePricingStructure,
  oneTimePricingStructure,
} from "packages/models/src/oneTimePricingStructure.generated.ts";
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
import {
  type UsageCalculationPeriod,
  usageCalculationPeriod,
} from "packages/models/src/usageCalculationPeriod.generated.ts";
import { type PriceStatus, priceStatus } from "packages/models/src/priceStatus.generated.ts";
import { z } from "zod";

export type PriceResponse = {
  id: string;
  productId: string;
  name: string;
  currency: Currency;
  structure:
    | GraduatedPricingStructure
    | VolumePricingStructure
    | SeatBasedPricingStructure
    | PackagePricingStructure
    | LinearPricingStructure
    | FixedPricingStructure
    | OneTimePricingStructure;
  billingFrequency: BillingFrequency;
  billingType: BillingType;
  createdAt: string;
  updatedAt?: string | undefined;
  integrationIds: Array<IntegrationId>;
  customMetricParameters: Array<PriceParameter>;
  listPriceId?: string | undefined;
  usageCalculationPeriod?: UsageCalculationPeriod | undefined;
  status: PriceStatus;
};

export const priceResponse = z.object({
  id: z.string(),
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: z.union([
    graduatedPricingStructure,
    volumePricingStructure,
    seatBasedPricingStructure,
    packagePricingStructure,
    linearPricingStructure,
    fixedPricingStructure,
    oneTimePricingStructure,
  ]),
  billingFrequency: billingFrequency,
  billingType: billingType,
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  integrationIds: z.array(integrationId),
  customMetricParameters: z.array(priceParameter),
  listPriceId: z.string().optional(),
  usageCalculationPeriod: usageCalculationPeriod.optional(),
  status: priceStatus,
});
