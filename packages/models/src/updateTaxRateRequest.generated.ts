import { type CountryCode, countryCode } from "packages/models/src/countryCode.generated.ts";
import { z } from "zod";

export type UpdateTaxRateRequest = {
  id: string;
  isPublished: boolean;
  name: string;
  invoiceName: string;
  invoiceShortName: string;
  description?: string | undefined;
  amount: string;
  country: CountryCode;
  region?: string | undefined;
  taxCategoryId?: string | undefined;
};

export const updateTaxRateRequest = z.object({
  id: z.string(),
  isPublished: z.boolean(),
  name: z.string(),
  invoiceName: z.string(),
  invoiceShortName: z.string(),
  description: z.string().optional(),
  amount: z.string(),
  country: countryCode,
  region: z.string().optional(),
  taxCategoryId: z.string().optional(),
});
