import { type CountryCode3, countryCode3 } from "packages/models/src/countryCode3.generated.ts";
import { z } from "zod";

export type UpdateTaxRateRequest = {
  id: string;
  isPublished: boolean;
  name: string;
  invoiceName: string;
  invoiceShortName: string;
  description?: (string | null) | undefined;
  amount: string;
  country: CountryCode3;
  region?: (string | null) | undefined;
  taxCategoryId?: (string | null) | undefined;
};

export const updateTaxRateRequest = z.object({
  id: z.string(),
  isPublished: z.boolean(),
  name: z.string(),
  invoiceName: z.string(),
  invoiceShortName: z.string(),
  description: z.string().nullable().optional(),
  amount: z.string(),
  country: countryCode3,
  region: z.string().nullable().optional(),
  taxCategoryId: z.string().nullable().optional(),
});
