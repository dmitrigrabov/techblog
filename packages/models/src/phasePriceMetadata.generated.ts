import {
  type ArrCalculation,
  arrCalculation,
} from "packages/models/src/arrCalculation.generated.ts";
import { z } from "zod";

export type PhasePriceMetadata = { priceId: string; arrCalculation: ArrCalculation };

export const phasePriceMetadata = z.object({ priceId: z.string(), arrCalculation: arrCalculation });
