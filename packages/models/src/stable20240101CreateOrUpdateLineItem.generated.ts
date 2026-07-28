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

export type Stable20240101CreateOrUpdateLineItem = {
  title: string;
  description?: string | undefined;
  quantity: string;
  rate: string;
  taxRate: string;
  servicePeriodStart?: string | undefined;
  servicePeriodEnd?: string | undefined;
  servicePeriod?: DateRange | undefined;
  groupId?: string | undefined;
  priceId?: string | undefined;
  rateDisplay?: RateDisplay | undefined;
  externalIds: Array<IntegrationExternalIdentifier>;
  revenueClassification?: RevenueClassification | undefined;
  creditGrantId?: string | undefined;
  revenueRecognitionMethod?: RevenueRecognitionMethod1 | undefined;
};

export const stable20240101CreateOrUpdateLineItem = z.object({
  title: z.string(),
  description: z.string().optional(),
  quantity: z.string(),
  rate: z.string(),
  taxRate: z.string(),
  servicePeriodStart: z.string().optional(),
  servicePeriodEnd: z.string().optional(),
  servicePeriod: dateRange.optional(),
  groupId: z.string().optional(),
  priceId: z.string().optional(),
  rateDisplay: rateDisplay.optional(),
  externalIds: z.array(integrationExternalIdentifier),
  revenueClassification: revenueClassification.optional(),
  creditGrantId: z.string().optional(),
  revenueRecognitionMethod: revenueRecognitionMethod1.optional(),
});
