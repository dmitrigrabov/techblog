import { type UsageMetric, usageMetric } from "packages/models/src/usageMetric.generated.ts";
import {
  type PaginationMeta2,
  paginationMeta2,
} from "packages/models/src/paginationMeta2.generated.ts";
import { z } from "zod";

export type ListUsageMetricEndpointProductResponseModel = {
  items: Array<UsageMetric>;
  pagination: PaginationMeta2;
};

export const listUsageMetricEndpointProductResponseModel = z.object({
  items: z.array(usageMetric),
  pagination: paginationMeta2,
});
