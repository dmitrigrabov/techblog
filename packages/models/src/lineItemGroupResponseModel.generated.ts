import {
  type TaxCategoryResponse,
  taxCategoryResponse,
} from "packages/models/src/taxCategoryResponse.generated.ts";
import { z } from "zod";

export type LineItemGroupResponseModel = {
  id: string;
  invoiceId: string;
  title: string;
  description?: string | undefined;
  index: number;
  netTotal: string;
  totalTax: string;
  grossTotal: string;
  taxCategory?: TaxCategoryResponse | undefined;
};

export const lineItemGroupResponseModel = z.object({
  id: z.string(),
  invoiceId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  index: z.number().int(),
  netTotal: z.string(),
  totalTax: z.string(),
  grossTotal: z.string(),
  taxCategory: taxCategoryResponse.optional(),
});
