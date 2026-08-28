import { type RateDisplay, rateDisplay } from "packages/models/src/rateDisplay.generated.ts";
import {
  type IntegrationExternalIdentifier,
  integrationExternalIdentifier,
} from "packages/models/src/integrationExternalIdentifier.generated.ts";
import {
  type InclusiveDateRange,
  inclusiveDateRange,
} from "packages/models/src/inclusiveDateRange.generated.ts";
import {
  type RevenueRecognitionMethod1,
  revenueRecognitionMethod1,
} from "packages/models/src/revenueRecognitionMethod1.generated.ts";
import {
  type RevenueClassification,
  revenueClassification,
} from "packages/models/src/revenueClassification.generated.ts";
import { z } from "zod";

export type UpdateCreditNoteLineItemEndpointUpdateCreditNoteLineItemRequestModel = {
  title: string;
  description?: string | undefined;
  quantity: string;
  rate: string;
  taxRate: string;
  rateDisplay?: RateDisplay | undefined;
  externalIds: Array<IntegrationExternalIdentifier>;
  servicePeriod?: InclusiveDateRange | undefined;
  revenueRecognitionMethod?: RevenueRecognitionMethod1 | undefined;
  revenueClassification?: RevenueClassification | undefined;
  productId?: string | undefined;
};

export const updateCreditNoteLineItemEndpointUpdateCreditNoteLineItemRequestModel = z.object({
  title: z.string(),
  description: z.string().optional(),
  quantity: z.string(),
  rate: z.string(),
  taxRate: z.string(),
  rateDisplay: rateDisplay.optional(),
  externalIds: z.array(integrationExternalIdentifier),
  servicePeriod: inclusiveDateRange.optional(),
  revenueRecognitionMethod: revenueRecognitionMethod1.optional(),
  revenueClassification: revenueClassification.optional(),
  productId: z.string().optional(),
});
