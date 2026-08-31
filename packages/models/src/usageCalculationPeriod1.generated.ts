import {
  type UsageCalculationFrequency1,
  usageCalculationFrequency1,
} from "packages/models/src/usageCalculationFrequency1.generated.ts";
import { z } from "zod";

export type UsageCalculationPeriod1 = { frequency: UsageCalculationFrequency1; interval: number };

export const usageCalculationPeriod1 = z.object({
  frequency: usageCalculationFrequency1,
  interval: z.number().int(),
});
