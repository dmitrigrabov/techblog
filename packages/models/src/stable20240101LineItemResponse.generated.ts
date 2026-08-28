import { type DateRange, dateRange } from "packages/models/src/dateRange.generated.ts";
import { type RateDisplay, rateDisplay } from "packages/models/src/rateDisplay.generated.ts";
import {
  type IntegrationExternalIdentifier,
  integrationExternalIdentifier,
} from "packages/models/src/integrationExternalIdentifier.generated.ts";
import {
  type RevenueClassification,
  revenueClassification,
} from "packages/models/src/revenueClassification.generated.ts";
import {
  type RevenueRecognitionMethod1,
  revenueRecognitionMethod1,
} from "packages/models/src/revenueRecognitionMethod1.generated.ts";
import { z } from "zod";

export type Stable20240101LineItemResponse = {
  id: string;
  invoiceId: string;
  title: string;
  description?: string | undefined;
  quantity: string;
  rate: string;
  taxRate: string;
  servicePeriodStart?: string | undefined;
  servicePeriodEnd?: string | undefined;
  servicePeriod?: DateRange | undefined;
  index: number;
  groupId?: string | undefined;
  netTotal: string;
  totalTax: string;
  grossTotal: string;
  priceId?: string | undefined;
  rateDisplay: RateDisplay;
  externalIds: Array<IntegrationExternalIdentifier>;
  revenueClassification?: RevenueClassification | undefined;
  creditGrantId?: string | undefined;
  productId?: string | undefined;
  revenueRecognitionMethod?: RevenueRecognitionMethod1 | undefined;
};

export const stable20240101LineItemResponse = z.object({
  id: z.string(),
  invoiceId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  quantity: z.string(),
  rate: z.string(),
  taxRate: z.string(),
  servicePeriodStart: z.string().optional(),
  servicePeriodEnd: z.string().optional(),
  servicePeriod: dateRange.optional(),
  index: z.number().int(),
  groupId: z.string().optional(),
  netTotal: z.string(),
  totalTax: z.string(),
  grossTotal: z.string(),
  priceId: z.string().optional(),
  rateDisplay: rateDisplay,
  externalIds: z.array(integrationExternalIdentifier),
  revenueClassification: revenueClassification.optional(),
  creditGrantId: z.string().optional(),
  productId: z.string().optional(),
  revenueRecognitionMethod: revenueRecognitionMethod1.optional(),
});
