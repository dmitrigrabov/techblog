import { z } from "zod";

export type CreditNoteApplication = {
  invoiceId: string;
  invoiceNumber?: string | undefined;
  amount: string;
  appliedAt: string;
};

export const creditNoteApplication = z.object({
  invoiceId: z.string(),
  invoiceNumber: z.string().optional(),
  amount: z.string(),
  appliedAt: z.string(),
});
