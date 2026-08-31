import type { CreateUsageMetricEndpointCreateUsageMetricRequestModel } from "packages/models/src/createUsageMetricEndpointCreateUsageMetricRequestModel.generated.ts";
import {
  createUsageMetricEndpointProductCreateUsageMetricResponseModel,
  type CreateUsageMetricEndpointProductCreateUsageMetricResponseModel,
} from "packages/models/src/createUsageMetricEndpointProductCreateUsageMetricResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiUsageMetricsArgs = {
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: CreateUsageMetricEndpointCreateUsageMetricRequestModel;
};

export const useCreateApiUsageMetrics = (
  options: UseMutationOptions<
    CreateUsageMetricEndpointProductCreateUsageMetricResponseModel,
    Error,
    UseCreateApiUsageMetricsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiUsageMetricsArgs) =>
      apiFetch("/usage-metrics", createUsageMetricEndpointProductCreateUsageMetricResponseModel, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Usage Metrics"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
