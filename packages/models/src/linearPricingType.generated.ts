import { z } from "zod";

export type LinearPricingType = "LINEAR";

export const linearPricingType = z.literal("LINEAR");
