import { z } from "zod";

export type RateDisplay = "ABSOLUTE" | "PERCENTAGE";

export const rateDisplay = z.enum(["ABSOLUTE", "PERCENTAGE"]);
