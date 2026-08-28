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

export type UpdateCreditNoteLineItemEndpointProductUpdateCreditNoteLineItemResponseModel = {
  id: string;
  creditNoteId: string;
  groupId?: string | undefined;
  lineItemId?: string | undefined;
  title: string;
  description?: string | undefined;
  quantity: string;
  rate: string;
  taxRate: string;
  index: number;
  priceId?: string | undefined;
  netTotal: string;
  totalTax: string;
  grossTotal: string;
  rateDisplay: RateDisplay;
  externalIds: Array<IntegrationExternalIdentifier>;
  servicePeriod?: InclusiveDateRange | undefined;
  revenueRecognitionMethod?: RevenueRecognitionMethod1 | undefined;
  revenueClassification?: RevenueClassification | undefined;
  productId?: string | undefined;
};

export const updateCreditNoteLineItemEndpointProductUpdateCreditNoteLineItemResponseModel =
  z.object({
    id: z.string(),
    creditNoteId: z.string(),
    groupId: z.string().optional(),
    lineItemId: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    quantity: z.string(),
    rate: z.string(),
    taxRate: z.string(),
    index: z.number().int(),
    priceId: z.string().optional(),
    netTotal: z.string(),
    totalTax: z.string(),
    grossTotal: z.string(),
    rateDisplay: rateDisplay,
    externalIds: z.array(integrationExternalIdentifier),
    servicePeriod: inclusiveDateRange.optional(),
    revenueRecognitionMethod: revenueRecognitionMethod1.optional(),
    revenueClassification: revenueClassification.optional(),
    productId: z.string().optional(),
  });
