import { z } from "zod";

export type GrantBillingFrequency = "ONE_TIME" | "MONTHLY" | "QUARTERLY" | "HALF_YEARLY" | "YEARLY";

export const grantBillingFrequency = z.enum([
  "ONE_TIME",
  "MONTHLY",
  "QUARTERLY",
  "HALF_YEARLY",
  "YEARLY",
]);
