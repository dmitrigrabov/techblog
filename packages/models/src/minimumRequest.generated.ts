import { z } from "zod";

export type MinimumRequest = { restrictToPrices?: Array<string> | undefined; amount: number };

export const minimumRequest = z.object({
  restrictToPrices: z.array(z.string()).optional(),
  amount: z.number(),
});
