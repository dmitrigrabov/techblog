import { type CreditType, creditType } from "packages/models/src/creditType.generated.ts";
import { type CreditGrant2, creditGrant2 } from "packages/models/src/creditGrant2.generated.ts";
import {
  type CreditTransaction,
  creditTransaction,
} from "packages/models/src/creditTransaction.generated.ts";
import { z } from "zod";

export type CreditBalance = {
  id: string;
  type: CreditType;
  name: string;
  balance: string;
  grants: Array<CreditGrant2>;
  transactions: Array<CreditTransaction>;
};

export const creditBalance = z.object({
  id: z.string(),
  type: creditType,
  name: z.string(),
  balance: z.string(),
  grants: z.array(creditGrant2),
  transactions: z.array(creditTransaction),
});
