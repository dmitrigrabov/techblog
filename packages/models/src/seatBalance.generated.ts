import { z } from "zod";

export type SeatBalance = { seatType: string; total: number; changeTimestamp: string };

export const seatBalance = z.object({
  seatType: z.string(),
  total: z.number().int(),
  changeTimestamp: z.string(),
});
