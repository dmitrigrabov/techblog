import {
  type DiscountCalculationType,
  discountCalculationType,
} from "packages/models/src/discountCalculationType.generated.ts";
import {
  type SeatDiscountType,
  seatDiscountType,
} from "packages/models/src/seatDiscountType.generated.ts";
import { z } from "zod";

export type EmbeddableDiscountRequest = {
  restrictToPrices?: Array<string> | undefined;
  type: DiscountCalculationType;
  amount: number;
  message: string;
  separateLineItem: boolean;
  seatDiscountType?: SeatDiscountType | undefined;
};

export const embeddableDiscountRequest = z.object({
  restrictToPrices: z.array(z.string()).optional(),
  type: discountCalculationType,
  amount: z.number(),
  message: z.string(),
  separateLineItem: z.boolean(),
  seatDiscountType: seatDiscountType.optional(),
});
