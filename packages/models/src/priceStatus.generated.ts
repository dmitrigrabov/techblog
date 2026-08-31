import { z } from "zod";

export type PriceStatus = "DRAFT" | "ACTIVE";

export const priceStatus = z.enum(["DRAFT", "ACTIVE"]);
