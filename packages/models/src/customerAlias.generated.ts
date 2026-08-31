import { z } from "zod";

export type CustomerAlias = {
  id: string;
  sequenceAccountId: string;
  customerId: string;
  value: string;
  createdAt: string;
};

export const customerAlias = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  customerId: z.string(),
  value: z.string(),
  createdAt: z.string(),
});
