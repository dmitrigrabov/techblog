import { z } from "zod";

export type CreditGrantResponseItem = {
  id: string;
  name: string;
  grantAmount: number;
  balance: number;
  issueDate: string;
  expiryDate?: string | undefined;
};

export const creditGrantResponseItem = z.object({
  id: z.string(),
  name: z.string(),
  grantAmount: z.number(),
  balance: z.number(),
  issueDate: z.string(),
  expiryDate: z.string().optional(),
});
