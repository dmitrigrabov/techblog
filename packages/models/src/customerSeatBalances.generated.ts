import { type SeatBalance, seatBalance } from "packages/models/src/seatBalance.generated.ts";
import { z } from "zod";

export type CustomerSeatBalances = {
  id: string;
  sequenceAccountId: string;
  legalName: string;
  customerAliases: Array<string>;
  total: number;
  changeTimestamp: string;
  balances: Array<SeatBalance>;
};

export const customerSeatBalances = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  legalName: z.string(),
  customerAliases: z.array(z.string()),
  total: z.number().int(),
  changeTimestamp: z.string(),
  balances: z.array(seatBalance),
});
