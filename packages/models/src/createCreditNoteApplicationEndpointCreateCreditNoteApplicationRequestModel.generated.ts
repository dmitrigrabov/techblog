import { type Currency, currency } from "packages/models/src/currency.generated.ts";
import { z } from "zod";

export type CreateCreditNoteApplicationEndpointCreateCreditNoteApplicationRequestModel = {
  creditNoteId: string;
  invoiceId: string;
  amount: number;
  currency: Currency;
  creditNoteBalanceVersion: number;
  invoiceBalanceVersion: number;
};

export const createCreditNoteApplicationEndpointCreateCreditNoteApplicationRequestModel = z.object({
  creditNoteId: z.string(),
  invoiceId: z.string(),
  amount: z.number(),
  currency: currency,
  creditNoteBalanceVersion: z.number().int(),
  invoiceBalanceVersion: z.number().int(),
});
