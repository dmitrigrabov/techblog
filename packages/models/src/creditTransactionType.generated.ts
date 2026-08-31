import { z } from "zod";

export type CreditTransactionType = "DEBIT" | "CREDIT";

export const creditTransactionType = z.enum(["DEBIT", "CREDIT"]);
