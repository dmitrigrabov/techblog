import { z } from "zod";

export type OneTimePricingType = "ONE_TIME";

export const oneTimePricingType = z.literal("ONE_TIME");
