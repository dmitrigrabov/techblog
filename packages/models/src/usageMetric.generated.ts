import { type MetricType, metricType } from "packages/models/src/metricType.generated.ts";
import {
  type AggregationType,
  aggregationType,
} from "packages/models/src/aggregationType.generated.ts";
import {
  type CustomMetricParameter,
  customMetricParameter,
} from "packages/models/src/customMetricParameter.generated.ts";
import { z } from "zod";

export type UsageMetric = {
  id: string;
  sequenceAccountId: string;
  name: string;
  description?: (string | null) | undefined;
  metricType: MetricType;
  eventType: string;
  aggregationType: AggregationType;
  aggregationProperty?: (string | null) | undefined;
  groupingProperty?: (string | null) | undefined;
  unit?: (string | null) | undefined;
  createdAt?: (string | null) | undefined;
  deletedAt?: (string | null) | undefined;
  propertyFilters: Record<string, unknown>;
  caseSensitive?: (boolean | null) | undefined;
  propertiesToNegate?: (Array<string> | null) | undefined;
  parameters: Array<CustomMetricParameter>;
};

export const usageMetric = z.object({
  id: z.string(),
  sequenceAccountId: z.string(),
  name: z.string(),
  description: z.string().nullable().optional(),
  metricType: metricType,
  eventType: z.string(),
  aggregationType: aggregationType,
  aggregationProperty: z.string().nullable().optional(),
  groupingProperty: z.string().nullable().optional(),
  unit: z.string().nullable().optional(),
  createdAt: z.string().nullable().optional(),
  deletedAt: z.string().nullable().optional(),
  propertyFilters: z.record(z.string(), z.unknown()),
  caseSensitive: z.boolean().nullable().optional(),
  propertiesToNegate: z.array(z.string()).nullable().optional(),
  parameters: z.array(customMetricParameter),
});
