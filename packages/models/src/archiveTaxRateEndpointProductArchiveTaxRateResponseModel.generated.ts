import { type CountryCode3, countryCode3 } from "packages/models/src/countryCode3.generated.ts";
import { z } from "zod";

export type ArchiveTaxRateEndpointProductArchiveTaxRateResponseModel = {
  id: string;
  versionId: string;
  sequenceAccountId: string;
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
  subRates?: (Array<unknown> | null) | undefined;
  isArchived: boolean;
};

export const archiveTaxRateEndpointProductArchiveTaxRateResponseModel = z.object({
  id: z.string(),
  versionId: z.string(),
  sequenceAccountId: z.string(),
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
  subRates: z.array(z.unknown()).nullable().optional(),
  isArchived: z.boolean(),
});
