import {
  type RevenueRecognitionMethod1,
  revenueRecognitionMethod1,
} from "packages/models/src/revenueRecognitionMethod1.generated.ts";
import {
  type RevenueClassification,
  revenueClassification,
} from "packages/models/src/revenueClassification.generated.ts";
import {
  type InclusiveDateRange,
  inclusiveDateRange,
} from "packages/models/src/inclusiveDateRange.generated.ts";
import { z } from "zod";

export type CreateLineItemGroupRequestModel = {
  title: string;
  description?: string | undefined;
  taxCategoryId?: string | undefined;
  revenueRecognitionMethod?: RevenueRecognitionMethod1 | undefined;
  revenueClassification?: RevenueClassification | undefined;
  servicePeriod?: InclusiveDateRange | undefined;
};

export const createLineItemGroupRequestModel = z.object({
  title: z.string(),
  description: z.string().optional(),
  taxCategoryId: z.string().optional(),
  revenueRecognitionMethod: revenueRecognitionMethod1.optional(),
  revenueClassification: revenueClassification.optional(),
  servicePeriod: inclusiveDateRange.optional(),
});
