import { z } from "zod";

export type UsageCalculationMode = "BILLING_PERIOD" | "CUMULATIVE" | "PERIODIC";

export const usageCalculationMode = z.enum(["BILLING_PERIOD", "CUMULATIVE", "PERIODIC"]);
