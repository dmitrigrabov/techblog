import { type Origin, origin } from "packages/models/src/origin.generated.ts";
import { z } from "zod";

export type PaymentAllocationResponse = {
  paymentId: string;
  amount: string;
  allocatedAt: string;
  paidAt: string;
  origin: Origin;
};

export const paymentAllocationResponse = z.object({
  paymentId: z.string(),
  amount: z.string(),
  allocatedAt: z.string(),
  paidAt: z.string(),
  origin: origin,
});
