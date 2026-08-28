import { z } from "zod";

export type CreateUsageEventEndpointProductCreateUsageEventResponseModel = {
  id: string;
  customerEventId: string;
  customerAlias: string;
  eventType: string;
  sequenceAccountId: string;
  eventTimestamp: string;
  eventProperties: Record<string, unknown>;
};

export const createUsageEventEndpointProductCreateUsageEventResponseModel = z.object({
  id: z.string(),
  customerEventId: z.string(),
  customerAlias: z.string(),
  eventType: z.string(),
  sequenceAccountId: z.string(),
  eventTimestamp: z.string(),
  eventProperties: z.record(z.string(), z.unknown()),
});
