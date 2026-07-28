import { z } from "zod";

export type PackagePricingType = "PACKAGE";

export const packagePricingType = z.literal("PACKAGE");
