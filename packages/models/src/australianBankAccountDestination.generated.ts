import { z } from "zod";

export type AustralianBankAccountDestination = {
  legalName: string;
  accountNumber: string;
  swiftCode: string;
  bsb: string;
};

export const australianBankAccountDestination = z.object({
  legalName: z.string(),
  accountNumber: z.string(),
  swiftCode: z.string(),
  bsb: z.string(),
});
