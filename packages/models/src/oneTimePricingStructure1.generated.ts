import {
  type OneTimePricingType,
  oneTimePricingType,
} from "packages/models/src/oneTimePricingType.generated.ts";
import { z } from "zod";

export type OneTimePricingStructure1 = { price: string; pricingType: OneTimePricingType };

export const oneTimePricingStructure1 = z.object({
  price: z.string(),
  pricingType: oneTimePricingType,
});
