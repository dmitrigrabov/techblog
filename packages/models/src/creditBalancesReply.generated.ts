import { type CreditBalance, creditBalance } from "packages/models/src/creditBalance.generated.ts";
import { z } from "zod";

export type CreditBalancesReply = { items: Array<CreditBalance> };

export const creditBalancesReply = z.object({ items: z.array(creditBalance) });
