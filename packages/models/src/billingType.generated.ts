import { z } from "zod";

export type BillingType = "IN_ARREARS" | "IN_ADVANCE";

export const billingType = z.enum(["IN_ARREARS", "IN_ADVANCE"]);
