import {
  deleteUsageMetricEndpointProductDeleteUsageMetricResponseModel,
  type DeleteUsageMetricEndpointProductDeleteUsageMetricResponseModel,
} from "packages/models/src/deleteUsageMetricEndpointProductDeleteUsageMetricResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiUsageMetricsIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
};

export type DeleteApiUsageMetricsIdBody = void;

export const useDeleteApiUsageMetricsId = (
  options: UseMutationOptions<
    DeleteUsageMetricEndpointProductDeleteUsageMetricResponseModel,
    Error,
    UseDeleteApiUsageMetricsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiUsageMetricsIdArgs) =>
      apiFetch(
        buildUrl("/usage-metrics/{id}", { id: args.id }),
        deleteUsageMetricEndpointProductDeleteUsageMetricResponseModel,
        { method: "DELETE" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Usage Metrics"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
