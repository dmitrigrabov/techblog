import { z } from "zod";

export type ProductTaxRateRepresentation = { priceId: string; taxRateId: string };

export const productTaxRateRepresentation = z.object({
  priceId: z.string(),
  taxRateId: z.string(),
});
