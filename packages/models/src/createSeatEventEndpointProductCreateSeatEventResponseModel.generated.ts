import { z } from "zod";

export type CreateSeatEventEndpointProductCreateSeatEventResponseModel = {
  id: string;
  customerEventId: string;
  customerAlias: string;
  seatType: string;
  sequenceAccountId: string;
  eventTimestamp: string;
  total: number;
};

export const createSeatEventEndpointProductCreateSeatEventResponseModel = z.object({
  id: z.string(),
  customerEventId: z.string(),
  customerAlias: z.string(),
  seatType: z.string(),
  sequenceAccountId: z.string(),
  eventTimestamp: z.string(),
  total: z.number().int(),
});
