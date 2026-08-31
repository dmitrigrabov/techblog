import { z } from "zod";

export type VolumePricingType = "VOLUME";

export const volumePricingType = z.literal("VOLUME");
