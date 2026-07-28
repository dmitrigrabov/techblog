import { z } from "zod";

export type CreateSeatMetricRequest = {
  seatType: string;
  description?: (string | null) | undefined;
  label: string;
};

export const createSeatMetricRequest = z.object({
  seatType: z.string(),
  description: z.string().nullable().optional(),
  label: z.string(),
});
