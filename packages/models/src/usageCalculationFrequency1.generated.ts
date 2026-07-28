import { z } from "zod";

export type UsageCalculationFrequency1 = "MONTHLY" | "QUARTERLY" | "HALF_YEARLY" | "YEARLY";

export const usageCalculationFrequency1 = z.enum(["MONTHLY", "QUARTERLY", "HALF_YEARLY", "YEARLY"]);
