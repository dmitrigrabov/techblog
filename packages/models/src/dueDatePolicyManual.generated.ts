import {
  type DueDatePolicyType,
  dueDatePolicyType,
} from "packages/models/src/dueDatePolicyType.generated.ts";
import { z } from "zod";

export type DueDatePolicyManual = { date: string; type: DueDatePolicyType };

export const dueDatePolicyManual = z.object({ date: z.string(), type: dueDatePolicyType });
