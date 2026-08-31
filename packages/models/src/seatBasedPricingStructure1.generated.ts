import {
  type SeatProrationStrategy,
  seatProrationStrategy,
} from "packages/models/src/seatProrationStrategy.generated.ts";
import {
  type OveragesFrequency,
  overagesFrequency,
} from "packages/models/src/overagesFrequency.generated.ts";
import { type SeatUsageTier, seatUsageTier } from "packages/models/src/seatUsageTier.generated.ts";
import {
  type SeatBasedPricingType,
  seatBasedPricingType,
} from "packages/models/src/seatBasedPricingType.generated.ts";
import { z } from "zod";

export type SeatBasedPricingStructure1 = {
  seatMetricId: string;
  pricePerSeat: string;
  prorationStrategy: SeatProrationStrategy;
  contractedMinimumSeats: number;
  overagesBillingFrequency?: OveragesFrequency | undefined;
  tiers: Array<SeatUsageTier>;
  prorateFlatFees?: boolean | undefined;
  pricingType: SeatBasedPricingType;
};

export const seatBasedPricingStructure1 = z.object({
  seatMetricId: z.string(),
  pricePerSeat: z.string(),
  prorationStrategy: seatProrationStrategy,
  contractedMinimumSeats: z.number().int(),
  overagesBillingFrequency: overagesFrequency.optional(),
  tiers: z.array(seatUsageTier),
  prorateFlatFees: z.boolean().optional(),
  pricingType: seatBasedPricingType,
});
