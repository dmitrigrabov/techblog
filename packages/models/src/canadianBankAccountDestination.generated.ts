import { z } from "zod";

export type CanadianBankAccountDestination = {
  transitNumber: string;
  institutionNumber: string;
  accountNumber: string;
};

export const canadianBankAccountDestination = z.object({
  transitNumber: z.string(),
  institutionNumber: z.string(),
  accountNumber: z.string(),
});
