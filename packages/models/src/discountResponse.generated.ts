import {
  type DiscountCalculationType,
  discountCalculationType,
} from "packages/models/src/discountCalculationType.generated.ts";
import {
  type SeatDiscountType,
  seatDiscountType,
} from "packages/models/src/seatDiscountType.generated.ts";
import { z } from "zod";

export type DiscountResponse = {
  id: string;
  sequenceAccountId: string;
  billingScheduleId: string;
  phaseId?: string | undefined;
  priceIds: Array<string>;
  separateLineItem: boolean;
  amount: number;
  discountCalculationType: DiscountCalculationType;
  message: string;
  validFrom?: string | undefined;
  validTo?: string | undefined;
  createdAt: string;
  updatedAt: string;
  seatDiscountType: SeatDiscountType;
};

export const discountResponse = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  billingScheduleId: z.string(),
  phaseId: z.string().optional(),
  priceIds: z.array(z.string()),
  separateLineItem: z.boolean(),
  amount: z.number(),
  discountCalculationType: discountCalculationType,
  message: z.string(),
  validFrom: z.string().optional(),
  validTo: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  seatDiscountType: seatDiscountType,
});
