import {
  type DiscountCalculationType,
  discountCalculationType,
} from "packages/models/src/discountCalculationType.generated.ts";
import { z } from "zod";

export type UpdateDiscountRequest = {
  billingScheduleId: string;
  priceIds: Array<string>;
  separateLineItem: boolean;
  amount: number;
  discountCalculationType: DiscountCalculationType;
  message: string;
  validFrom?: string | undefined;
  validTo?: string | undefined;
};

export const updateDiscountRequest = z.object({
  billingScheduleId: z.string(),
  priceIds: z.array(z.string()),
  separateLineItem: z.boolean(),
  amount: z.number(),
  discountCalculationType: discountCalculationType,
  message: z.string(),
  validFrom: z.string().optional(),
  validTo: z.string().optional(),
});
