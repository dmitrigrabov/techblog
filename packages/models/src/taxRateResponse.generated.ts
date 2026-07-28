import { type CountryCode3, countryCode3 } from "packages/models/src/countryCode3.generated.ts";
import { z } from "zod";

export type TaxRateResponse = {
  id: string;
  versionId: string;
  version: number;
  isPublished: boolean;
  name: string;
  invoiceName: string;
  invoiceShortName: string;
  description?: (string | null) | undefined;
  amount: string;
  country: CountryCode3;
  region?: (string | null) | undefined;
  taxCategoryId?: (string | null) | undefined;
  isArchived: boolean;
  updatedAt?: (string | null) | undefined;
};

export const taxRateResponse = z.object({
  id: z.string(),
  versionId: z.string(),
  version: z.number().int(),
  isPublished: z.boolean(),
  name: z.string(),
  invoiceName: z.string(),
  invoiceShortName: z.string(),
  description: z.string().nullable().optional(),
  amount: z.string(),
  country: countryCode3,
  region: z.string().nullable().optional(),
  taxCategoryId: z.string().nullable().optional(),
  isArchived: z.boolean(),
  updatedAt: z.string().nullable().optional(),
});
