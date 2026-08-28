import { z } from "zod";

export type CreateUsageEventEndpointCreateUsageEventRequestModel = {
  customerEventId?: (string | null) | undefined;
  customerAlias: string;
  eventType: string;
  eventTimestamp?: (string | null) | undefined;
  eventProperties?: Record<string, unknown> | undefined;
};

export const createUsageEventEndpointCreateUsageEventRequestModel = z.object({
  customerEventId: z.string().nullable().optional(),
  customerAlias: z.string(),
  eventType: z.string(),
  eventTimestamp: z.string().nullable().optional(),
  eventProperties: z.record(z.string(), z.unknown()).optional(),
});
