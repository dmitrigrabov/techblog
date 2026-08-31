import { z } from "zod";

export type DiscountCalculationType = "PERCENTAGE" | "NOMINAL";

export const discountCalculationType = z.enum(["PERCENTAGE", "NOMINAL"]);
