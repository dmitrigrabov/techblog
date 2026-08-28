import {
  type FixedPricingType,
  fixedPricingType,
} from "packages/models/src/fixedPricingType.generated.ts";
import { z } from "zod";

export type FixedPricingStructure1 = { price: string; pricingType: FixedPricingType };

export const fixedPricingStructure1 = z.object({
  price: z.string(),
  pricingType: fixedPricingType,
});
