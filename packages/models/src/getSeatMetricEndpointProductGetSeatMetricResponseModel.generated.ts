import { z } from "zod";

export type GetSeatMetricEndpointProductGetSeatMetricResponseModel = {
  id: string;
  seatType: string;
  createdBy?: (string | null) | undefined;
  label: string;
  description?: (string | null) | undefined;
  createdAt: string;
  updatedAt: string;
};

export const getSeatMetricEndpointProductGetSeatMetricResponseModel = z.object({
  id: z.string(),
  seatType: z.string(),
  createdBy: z.string().nullable().optional(),
  label: z.string(),
  description: z.string().nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
