import { z } from "zod";

export type SwedishBankgiroDestination = { bankgiroNumber: string; accountName: string };

export const swedishBankgiroDestination = z.object({
  bankgiroNumber: z.string(),
  accountName: z.string(),
});
