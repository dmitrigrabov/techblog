import { z } from "zod";

export type UsAchDestination = {
  accountNumber: string;
  accountName: string;
  bankName: string;
  bankRoutingNumber: string;
};

export const usAchDestination = z.object({
  accountNumber: z.string(),
  accountName: z.string(),
  bankName: z.string(),
  bankRoutingNumber: z.string(),
});
