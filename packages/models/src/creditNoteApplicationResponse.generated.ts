import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import {
  type BalanceResponse,
  balanceResponse,
} from "packages/models/src/balanceResponse.generated.ts";
import { z } from "zod";

export type CreditNoteApplicationResponse = {
  ledgerTransactionId: string;
  creditNoteId: string;
  invoiceId: string;
  amount: number;
  currency: Currency;
  appliedAt: string;
  invoiceBalance: BalanceResponse;
  creditNoteBalance: BalanceResponse;
};

export const creditNoteApplicationResponse = z.object({
  ledgerTransactionId: z.string(),
  creditNoteId: z.string(),
  invoiceId: z.string(),
  amount: z.number(),
  currency: currency,
  appliedAt: z.string(),
  invoiceBalance: balanceResponse,
  creditNoteBalance: balanceResponse,
});
