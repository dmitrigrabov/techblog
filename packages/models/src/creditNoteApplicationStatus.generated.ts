import { z } from "zod";

export type CreditNoteApplicationStatus =
  | "UNAPPLIED"
  | "PARTIALLY_APPLIED"
  | "FULLY_APPLIED"
  | "UNKNOWN";

export const creditNoteApplicationStatus = z.enum([
  "UNAPPLIED",
  "PARTIALLY_APPLIED",
  "FULLY_APPLIED",
  "UNKNOWN",
]);
