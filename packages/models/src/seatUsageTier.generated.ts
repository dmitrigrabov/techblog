import { z } from "zod";

export type SeatUsageTier = {
  upperBound?: string | undefined;
  price: string;
  fee?: string | undefined;
};

export const seatUsageTier = z.object({
  upperBound: z.string().optional(),
  price: z.string(),
  fee: z.string().optional(),
});
