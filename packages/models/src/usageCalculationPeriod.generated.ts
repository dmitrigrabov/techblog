import {
  type UsageCalculationFrequency,
  usageCalculationFrequency,
} from "packages/models/src/usageCalculationFrequency.generated.ts";
import { z } from "zod";

export type UsageCalculationPeriod = { frequency: UsageCalculationFrequency; interval: number };

export const usageCalculationPeriod = z.object({
  frequency: usageCalculationFrequency,
  interval: z.number().int(),
});
