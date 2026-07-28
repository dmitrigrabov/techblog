import {
  type PackagePricingType,
  packagePricingType,
} from "packages/models/src/packagePricingType.generated.ts";
import { z } from "zod";

export type PackagePricingStructure = {
  packageSize: string;
  pricePerPackage: string;
  usageMetricId: string;
  pricingType: PackagePricingType;
};

export const packagePricingStructure = z.object({
  packageSize: z.string(),
  pricePerPackage: z.string(),
  usageMetricId: z.string(),
  pricingType: packagePricingType,
});
