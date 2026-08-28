import { z } from "zod";

export type AppliedCreditNoteLineItemResponse = {
  name: string;
  netTotal: string;
  grossTotal: string;
  invoiceLineItemIds: Array<string>;
};

export const appliedCreditNoteLineItemResponse = z.object({
  name: z.string(),
  netTotal: z.string(),
  grossTotal: z.string(),
  invoiceLineItemIds: z.array(z.string()),
});
