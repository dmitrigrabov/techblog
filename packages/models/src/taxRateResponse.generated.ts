import { type CountryCode, countryCode } from "packages/models/src/countryCode.generated.ts";
import { z } from "zod";

export type TaxRateResponse = {
  id: string;
  versionId: string;
  version: number;
  isPublished: boolean;
  name: string;
  invoiceName: string;
  invoiceShortName: string;
  description?: string | undefined;
  amount: string;
  country: CountryCode;
  region?: string | undefined;
  taxCategoryId?: string | undefined;
  isArchived: boolean;
  updatedAt?: string | undefined;
};

export const taxRateResponse = z.object({
  id: z.string(),
  versionId: z.string(),
  version: z.number().int(),
  isPublished: z.boolean(),
  name: z.string(),
  invoiceName: z.string(),
  invoiceShortName: z.string(),
  description: z.string().optional(),
  amount: z.string(),
  country: countryCode,
  region: z.string().optional(),
  taxCategoryId: z.string().optional(),
  isArchived: z.boolean(),
  updatedAt: z.string().optional(),
});
