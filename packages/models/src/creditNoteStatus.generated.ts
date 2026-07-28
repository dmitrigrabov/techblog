import { z } from "zod";

export type CreditNoteStatus = "DRAFT" | "FINAL" | "IN_PROGRESS" | "SENT" | "VOIDED";

export const creditNoteStatus = z.enum(["DRAFT", "FINAL", "IN_PROGRESS", "SENT", "VOIDED"]);
