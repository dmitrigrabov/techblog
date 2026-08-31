import { type UsageMetric, usageMetric } from "packages/models/src/usageMetric.generated.ts";
import {
  type PaginationMeta1,
  paginationMeta1,
} from "packages/models/src/paginationMeta1.generated.ts";
import { z } from "zod";

export type ListUsageMetricEndpointProductResponseModel = {
  items: Array<UsageMetric>;
  pagination: PaginationMeta1;
};

export const listUsageMetricEndpointProductResponseModel = z.object({
  items: z.array(usageMetric),
  pagination: paginationMeta1,
});
