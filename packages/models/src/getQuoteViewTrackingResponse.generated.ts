import {
  type UniqueViewerResponse,
  uniqueViewerResponse,
} from "packages/models/src/uniqueViewerResponse.generated.ts";
import {
  type DailyQuoteViewTotalResponse,
  dailyQuoteViewTotalResponse,
} from "packages/models/src/dailyQuoteViewTotalResponse.generated.ts";
import { z } from "zod";

export type GetQuoteViewTrackingResponse = {
  totalViews: number;
  uniqueViewers: Array<UniqueViewerResponse>;
  viewsByDay: Array<DailyQuoteViewTotalResponse>;
};

export const getQuoteViewTrackingResponse = z.object({
  totalViews: z.number().int(),
  uniqueViewers: z.array(uniqueViewerResponse),
  viewsByDay: z.array(dailyQuoteViewTotalResponse),
});
