import { z } from "zod";

export type DailyQuoteViewTotalResponse = { date: string; totalViews: number };

export const dailyQuoteViewTotalResponse = z.object({
  date: z.string(),
  totalViews: z.number().int(),
});
