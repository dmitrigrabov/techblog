import { z } from "zod";

export type AppliedCreditGrantStatus = "APPLIED" | "PROJECTED";

export const appliedCreditGrantStatus = z.enum(["APPLIED", "PROJECTED"]);
