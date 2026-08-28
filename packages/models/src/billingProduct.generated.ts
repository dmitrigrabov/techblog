import {
  type RevenueRecognitionMethod,
  revenueRecognitionMethod,
} from "packages/models/src/revenueRecognitionMethod.generated.ts";
import { z } from "zod";

export type BillingProduct = {
  id: string;
  name: string;
  label: string;
  sequenceAccountId: string;
  createdAt: string;
  updatedAt: string;
  prices: Array<unknown>;
  taxCategoryName?: string | undefined;
  recognitionMethod: RevenueRecognitionMethod;
};

export const billingProduct = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string(),
  sequenceAccountId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  prices: z.array(z.unknown()),
  taxCategoryName: z.string().optional(),
  recognitionMethod: revenueRecognitionMethod,
});
