import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type GraduatedPricingStructure1,
  graduatedPricingStructure1,
} from "packages/models/src/graduatedPricingStructure1.generated.ts";
import {
  type VolumePricingStructure1,
  volumePricingStructure1,
} from "packages/models/src/volumePricingStructure1.generated.ts";
import {
  type SeatBasedPricingStructure1,
  seatBasedPricingStructure1,
} from "packages/models/src/seatBasedPricingStructure1.generated.ts";
import {
  type PackagePricingStructure1,
  packagePricingStructure1,
} from "packages/models/src/packagePricingStructure1.generated.ts";
import {
  type LinearPricingStructure1,
  linearPricingStructure1,
} from "packages/models/src/linearPricingStructure1.generated.ts";
import {
  type FixedPricingStructure1,
  fixedPricingStructure1,
} from "packages/models/src/fixedPricingStructure1.generated.ts";
import {
  type OneTimePricingStructure1,
  oneTimePricingStructure1,
} from "packages/models/src/oneTimePricingStructure1.generated.ts";
import {
  type BillingFrequency,
  billingFrequency,
} from "packages/models/src/billingFrequency.generated.ts";
import {
  type UsageCalculationPeriod1,
  usageCalculationPeriod1,
} from "packages/models/src/usageCalculationPeriod1.generated.ts";
import { type BillingType, billingType } from "packages/models/src/billingType.generated.ts";
import { type IntegrationId, integrationId } from "packages/models/src/integrationId.generated.ts";
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
    | GraduatedPricingStructure1
    | VolumePricingStructure1
    | SeatBasedPricingStructure1
    | PackagePricingStructure1
    | LinearPricingStructure1
    | FixedPricingStructure1
    | OneTimePricingStructure1;
  billingFrequency: BillingFrequency;
  usageCalculationPeriod?: UsageCalculationPeriod1 | undefined;
  billingType: BillingType;
  createdAt: string;
  updatedAt: string;
  integrationIds: Array<IntegrationId>;
  customMetricParameters: Array<PriceParameter>;
};

export const listPrice = z.object({
  id: z.string(),
  productId: z.string(),
  name: z.string(),
  currency: currency,
  structure: z.union([
    graduatedPricingStructure1,
    volumePricingStructure1,
    seatBasedPricingStructure1,
    packagePricingStructure1,
    linearPricingStructure1,
    fixedPricingStructure1,
    oneTimePricingStructure1,
  ]),
  billingFrequency: billingFrequency,
  usageCalculationPeriod: usageCalculationPeriod1.optional(),
  billingType: billingType,
  createdAt: z.string(),
  updatedAt: z.string(),
  integrationIds: z.array(integrationId),
  customMetricParameters: z.array(priceParameter),
});
