import {
  type EmbeddableDiscountRequest,
  embeddableDiscountRequest,
} from "packages/models/src/embeddableDiscountRequest.generated.ts";
import {
  type MinimumRequest,
  minimumRequest,
} from "packages/models/src/minimumRequest.generated.ts";
import {
  type PhaseRecurrencePreference,
  phaseRecurrencePreference,
} from "packages/models/src/phaseRecurrencePreference.generated.ts";
import {
  type PhasePriceMetadata,
  phasePriceMetadata,
} from "packages/models/src/phasePriceMetadata.generated.ts";
import {
  type PhaseListPriceMetadata,
  phaseListPriceMetadata,
} from "packages/models/src/phaseListPriceMetadata.generated.ts";
import { z } from "zod";

export type PhaseRequest = {
  name?: string | undefined;
  priceIds: Array<string>;
  startDate: string;
  endDate?: string | undefined;
  discounts?: Array<EmbeddableDiscountRequest> | undefined;
  minimums?: Array<MinimumRequest> | undefined;
  listPriceIds?: Array<string> | undefined;
  recurrencePreference?: PhaseRecurrencePreference | undefined;
  phasePriceMetadata?: Array<PhasePriceMetadata> | undefined;
  phaseListPriceMetadata?: Array<PhaseListPriceMetadata> | undefined;
};

export const phaseRequest = z.object({
  name: z.string().optional(),
  priceIds: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string().optional(),
  discounts: z.array(embeddableDiscountRequest).optional(),
  minimums: z.array(minimumRequest).optional(),
  listPriceIds: z.array(z.string()).optional(),
  recurrencePreference: phaseRecurrencePreference.optional(),
  phasePriceMetadata: z.array(phasePriceMetadata).optional(),
  phaseListPriceMetadata: z.array(phaseListPriceMetadata).optional(),
});
