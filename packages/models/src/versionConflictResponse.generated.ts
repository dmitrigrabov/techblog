import {
  type BalanceResponse,
  balanceResponse,
} from "packages/models/src/balanceResponse.generated.ts";
import { z } from "zod";

export type VersionConflictResponse = {
  message: string;
  currentInvoiceBalance: BalanceResponse;
  currentCreditNoteBalance: BalanceResponse;
};

export const versionConflictResponse = z.object({
  message: z.string(),
  currentInvoiceBalance: balanceResponse,
  currentCreditNoteBalance: balanceResponse,
});
