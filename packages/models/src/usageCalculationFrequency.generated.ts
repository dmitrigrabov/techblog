import { z } from "zod";

export type UsageCalculationFrequency = "MONTHLY" | "QUARTERLY" | "HALF_YEARLY" | "YEARLY";

export const usageCalculationFrequency = z.enum(["MONTHLY", "QUARTERLY", "HALF_YEARLY", "YEARLY"]);
