import { z } from "zod";

export type DueDatePolicyType = "MANUAL" | "PAYMENT_TERMS";

export const dueDatePolicyType = z.enum(["MANUAL", "PAYMENT_TERMS"]);
