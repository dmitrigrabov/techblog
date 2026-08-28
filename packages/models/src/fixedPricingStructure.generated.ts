import {
  type FixedPricingType,
  fixedPricingType,
} from "packages/models/src/fixedPricingType.generated.ts";
import { z } from "zod";

export type FixedPricingStructure = { price: string; pricingType: FixedPricingType };

export const fixedPricingStructure = z.object({ price: z.string(), pricingType: fixedPricingType });
