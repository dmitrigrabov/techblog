import { z } from "zod";

export type AggregationType = "COUNT" | "UNIQUE" | "SUM" | "CUSTOM";

export const aggregationType = z.enum(["COUNT", "UNIQUE", "SUM", "CUSTOM"]);
