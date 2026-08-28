import { z } from "zod";

export type BillingFrequency =
  | "ON_DEMAND"
  | "ONE_TIME"
  | "MONTHLY"
  | "QUARTERLY"
  | "HALF_YEARLY"
  | "YEARLY"
  | "PER_EVENT";

export const billingFrequency = z.enum([
  "ON_DEMAND",
  "ONE_TIME",
  "MONTHLY",
  "QUARTERLY",
  "HALF_YEARLY",
  "YEARLY",
  "PER_EVENT",
]);
