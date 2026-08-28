import { z } from "zod";

export type TaxStatus = "TAXED" | "TAX_EXEMPT" | "REVERSE_CHARGED";

export const taxStatus = z.enum(["TAXED", "TAX_EXEMPT", "REVERSE_CHARGED"]);
