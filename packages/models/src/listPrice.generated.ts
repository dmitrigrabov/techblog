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
import {
  type UsageCalculationPeriod,
  usageCalculationPeriod,
} from "packages/models/src/usageCalculationPeriod.generated.ts";
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

export type ListPrice = {
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
  usageCalculationPeriod?: UsageCalculationPeriod | undefined;
  billingType: BillingType;
  createdAt: string;
  updatedAt: string;
  integrationIds: Array<IntegrationId1>;
  customMetricParameters: Array<PriceParameter>;
};

export const listPrice = z.object({
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
  usageCalculationPeriod: usageCalculationPeriod.optional(),
  billingType: billingType,
  createdAt: z.string(),
  updatedAt: z.string(),
  integrationIds: z.array(integrationId1),
  customMetricParameters: z.array(priceParameter),
});
