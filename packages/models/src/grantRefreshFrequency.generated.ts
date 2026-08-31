import { z } from "zod";

export type GrantRefreshFrequency = "NONE" | "MONTHLY" | "QUARTERLY" | "HALF_YEARLY" | "YEARLY";

export const grantRefreshFrequency = z.enum([
  "NONE",
  "MONTHLY",
  "QUARTERLY",
  "HALF_YEARLY",
  "YEARLY",
]);
