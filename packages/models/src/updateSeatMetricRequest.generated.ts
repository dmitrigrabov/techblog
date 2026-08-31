import { z } from "zod";

export type UpdateSeatMetricRequest = { description?: (string | null) | undefined; label: string };

export const updateSeatMetricRequest = z.object({
  description: z.string().nullable().optional(),
  label: z.string(),
});
