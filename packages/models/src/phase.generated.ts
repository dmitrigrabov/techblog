import {
  type EmbeddableDiscount,
  embeddableDiscount,
} from "packages/models/src/embeddableDiscount.generated.ts";
import { type Minimum, minimum } from "packages/models/src/minimum.generated.ts";
import {
  type EmbeddableCreditGrant,
  embeddableCreditGrant,
} from "packages/models/src/embeddableCreditGrant.generated.ts";
import {
  type IntegrationId2,
  integrationId2,
} from "packages/models/src/integrationId2.generated.ts";
import {
  type PhaseRecurrencePreference,
  phaseRecurrencePreference,
} from "packages/models/src/phaseRecurrencePreference.generated.ts";
import {
  type PhasePriceMetadata,
  phasePriceMetadata,
} from "packages/models/src/phasePriceMetadata.generated.ts";
import { z } from "zod";

export type Phase = {
  id: string;
  name?: string | undefined;
  externalContractRef?: string | undefined;
  createdAt: string;
  billingScheduleId: string;
  priceIds: Array<string>;
  startDate: string;
  endDate?: string | undefined;
  discounts: Array<EmbeddableDiscount>;
  minimums: Array<Minimum>;
  creditGrants: Array<EmbeddableCreditGrant>;
  integrationIds: Array<IntegrationId2>;
  recurrencePreference: PhaseRecurrencePreference;
  phasePriceMetadata: Array<PhasePriceMetadata>;
};

export const phase = z.object({
  id: z.string(),
  name: z.string().optional(),
  externalContractRef: z.string().optional(),
  createdAt: z.string(),
  billingScheduleId: z.string(),
  priceIds: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string().optional(),
  discounts: z.array(embeddableDiscount),
  minimums: z.array(minimum),
  creditGrants: z.array(embeddableCreditGrant),
  integrationIds: z.array(integrationId2),
  recurrencePreference: phaseRecurrencePreference,
  phasePriceMetadata: z.array(phasePriceMetadata),
});
