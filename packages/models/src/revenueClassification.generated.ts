import { z } from "zod";

export type RevenueClassification = "PREPAYMENT" | "EARNED" | "BURNDOWN";

export const revenueClassification = z.enum(["PREPAYMENT", "EARNED", "BURNDOWN"]);
