import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { z } from "zod";

export type BalanceResponse = { value: number; currency: Currency; version: number };

export const balanceResponse = z.object({
  value: z.number(),
  currency: currency,
  version: z.number().int(),
});
