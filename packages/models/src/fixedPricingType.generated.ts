import { z } from "zod";

export type FixedPricingType = "FIXED";

export const fixedPricingType = z.literal("FIXED");
