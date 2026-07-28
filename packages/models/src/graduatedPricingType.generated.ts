import { z } from "zod";

export type GraduatedPricingType = "GRADUATED";

export const graduatedPricingType = z.literal("GRADUATED");
