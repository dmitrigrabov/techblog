import {
  type GraduatedUsageTier,
  graduatedUsageTier,
} from "packages/models/src/graduatedUsageTier.generated.ts";
import {
  type UsageCalculationMode,
  usageCalculationMode,
} from "packages/models/src/usageCalculationMode.generated.ts";
import {
  type GraduatedPricingType,
  graduatedPricingType,
} from "packages/models/src/graduatedPricingType.generated.ts";
import { z } from "zod";

export type GraduatedPricingStructure = {
  tiers: Array<GraduatedUsageTier>;
  usageMetricId: string;
  usageCalculationMode: UsageCalculationMode;
  pricingType: GraduatedPricingType;
};

export const graduatedPricingStructure = z.object({
  tiers: z.array(graduatedUsageTier),
  usageMetricId: z.string(),
  usageCalculationMode: usageCalculationMode,
  pricingType: graduatedPricingType,
});
