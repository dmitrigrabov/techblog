import { type MetricType, metricType } from "packages/models/src/metricType.generated.ts";
import {
  type AggregationType,
  aggregationType,
} from "packages/models/src/aggregationType.generated.ts";
import { z } from "zod";

export type UpdateUsageMetricEndpointUpdateUsageMetricRequestModel = {
  name: string;
  description?: (string | null) | undefined;
  metricType: MetricType;
  eventType: string;
  aggregationType: AggregationType;
  aggregationProperty?: (string | null) | undefined;
  groupingProperty?: (string | null) | undefined;
  unit?: (string | null) | undefined;
  propertyFilters?: Record<string, Record<string, never>> | undefined;
  caseSensitive?: (boolean | null) | undefined;
  propertiesToNegate?: (Array<string> | null) | undefined;
};

export const updateUsageMetricEndpointUpdateUsageMetricRequestModel = z.object({
  name: z.string(),
  description: z.string().nullable().optional(),
  metricType: metricType,
  eventType: z.string(),
  aggregationType: aggregationType,
  aggregationProperty: z.string().nullable().optional(),
  groupingProperty: z.string().nullable().optional(),
  unit: z.string().nullable().optional(),
  propertyFilters: z.record(z.string(), z.object({})).optional(),
  caseSensitive: z.boolean().nullable().optional(),
  propertiesToNegate: z.array(z.string()).nullable().optional(),
});
