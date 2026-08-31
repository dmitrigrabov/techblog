import { z } from "zod";

export type Minimum = {
  id: string;
  sequenceAccountId: string;
  billingScheduleId: string;
  phaseId: string;
  amount: number;
  restrictToPrices: Array<string>;
  createdAt: string;
  updatedAt: string;
};

export const minimum = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  billingScheduleId: z.string(),
  phaseId: z.string(),
  amount: z.number(),
  restrictToPrices: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});
