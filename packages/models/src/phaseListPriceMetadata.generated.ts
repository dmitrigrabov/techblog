import {
  type ArrCalculation,
  arrCalculation,
} from "packages/models/src/arrCalculation.generated.ts";
import { z } from "zod";

export type PhaseListPriceMetadata = { listPriceId: string; arrCalculation: ArrCalculation };

export const phaseListPriceMetadata = z.object({
  listPriceId: z.string(),
  arrCalculation: arrCalculation,
});
