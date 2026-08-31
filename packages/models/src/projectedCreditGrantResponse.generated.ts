import { z } from "zod";

export type ProjectedCreditGrantResponse = {
  creditGrantId?: string | undefined;
  creditGrantName?: string | undefined;
  amount: string;
};

export const projectedCreditGrantResponse = z.object({
  creditGrantId: z.string().optional(),
  creditGrantName: z.string().optional(),
  amount: z.string(),
});
