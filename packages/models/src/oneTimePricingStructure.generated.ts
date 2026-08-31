import {
  type OneTimePricingType,
  oneTimePricingType,
} from "packages/models/src/oneTimePricingType.generated.ts";
import { z } from "zod";

export type OneTimePricingStructure = { price: string; pricingType: OneTimePricingType };

export const oneTimePricingStructure = z.object({
  price: z.string(),
  pricingType: oneTimePricingType,
});
