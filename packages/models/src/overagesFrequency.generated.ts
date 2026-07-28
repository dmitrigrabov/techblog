import { z } from "zod";

export type OveragesFrequency = "NONE" | "MONTHLY" | "QUARTERLY" | "HALF_YEARLY" | "YEARLY";

export const overagesFrequency = z.enum(["NONE", "MONTHLY", "QUARTERLY", "HALF_YEARLY", "YEARLY"]);
