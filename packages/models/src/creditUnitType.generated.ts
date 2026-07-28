import { z } from "zod";

export type CreditUnitType = "CURRENCY" | "METRIC";

export const creditUnitType = z.enum(["CURRENCY", "METRIC"]);
