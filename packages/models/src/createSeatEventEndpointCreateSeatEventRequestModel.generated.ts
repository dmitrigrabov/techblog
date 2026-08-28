import { z } from "zod";

export type CreateSeatEventEndpointCreateSeatEventRequestModel = {
  customerEventId?: (string | null) | undefined;
  customerAlias: string;
  seatType: string;
  eventTimestamp: string;
  total: number;
};

export const createSeatEventEndpointCreateSeatEventRequestModel = z.object({
  customerEventId: z.string().nullable().optional(),
  customerAlias: z.string(),
  seatType: z.string(),
  eventTimestamp: z.string(),
  total: z.number().int(),
});
