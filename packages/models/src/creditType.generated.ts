import { z } from "zod";

export type CreditType = "CASH" | "USAGE";

export const creditType = z.enum(["CASH", "USAGE"]);
