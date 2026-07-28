import { type MetricType, metricType } from "packages/models/src/metricType.generated.ts";
import {
  type AggregationType,
  aggregationType,
} from "packages/models/src/aggregationType.generated.ts";
import { z } from "zod";

export type UsageMetricCalculationResponse = {
  name: string;
  metricType: MetricType;
  eventType: string;
  aggregationType: AggregationType;
  eventCount: number;
  value: number;
  unit?: (string | null) | undefined;
  minEventId?: (string | null) | undefined;
  maxEventId?: (string | null) | undefined;
};

export const usageMetricCalculationResponse = z.object({
  name: z.string(),
  metricType: metricType,
  eventType: z.string(),
  aggregationType: aggregationType,
  eventCount: z.number().int(),
  value: z.number(),
  unit: z.string().nullable().optional(),
  minEventId: z.string().nullable().optional(),
  maxEventId: z.string().nullable().optional(),
});
