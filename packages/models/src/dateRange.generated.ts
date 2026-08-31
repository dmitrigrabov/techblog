import { z } from "zod";

export type DateRange = { startDate: string; endDate: string };

export const dateRange = z.object({ startDate: z.string(), endDate: z.string() });
