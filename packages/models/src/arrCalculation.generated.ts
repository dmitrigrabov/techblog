import { z } from "zod";

export type ArrCalculation = "INCLUDE" | "EXCLUDE";

export const arrCalculation = z.enum(["INCLUDE", "EXCLUDE"]);
