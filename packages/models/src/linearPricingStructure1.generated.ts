import {
  type LinearPricingType,
  linearPricingType,
} from "packages/models/src/linearPricingType.generated.ts";
import { z } from "zod";

export type LinearPricingStructure1 = {
  pricePerUnit: string;
  usageMetricId: string;
  isPricePercentage: boolean;
  pricingType: LinearPricingType;
};

export const linearPricingStructure1 = z.object({
  pricePerUnit: z.string(),
  usageMetricId: z.string(),
  isPricePercentage: z.boolean(),
  pricingType: linearPricingType,
});
