import {
  type VolumeUsageTier,
  volumeUsageTier,
} from "packages/models/src/volumeUsageTier.generated.ts";
import {
  type VolumePricingType,
  volumePricingType,
} from "packages/models/src/volumePricingType.generated.ts";
import { z } from "zod";

export type VolumePricingStructure1 = {
  tiers: Array<VolumeUsageTier>;
  usageMetricId: string;
  pricingType: VolumePricingType;
};

export const volumePricingStructure1 = z.object({
  tiers: z.array(volumeUsageTier),
  usageMetricId: z.string(),
  pricingType: volumePricingType,
});
