import { z } from "zod";

export type QuoteDealType = "NEW_BUSINESS" | "RENEWAL";

export const quoteDealType = z.enum(["NEW_BUSINESS", "RENEWAL"]);
