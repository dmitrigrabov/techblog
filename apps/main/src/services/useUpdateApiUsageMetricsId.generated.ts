import type { UpdateUsageMetricEndpointUpdateUsageMetricRequestModel } from "packages/models/src/updateUsageMetricEndpointUpdateUsageMetricRequestModel.generated.ts";
import {
  updateUsageMetricEndpointProductUpdateUsageMetricResponseModel,
  type UpdateUsageMetricEndpointProductUpdateUsageMetricResponseModel,
} from "packages/models/src/updateUsageMetricEndpointProductUpdateUsageMetricResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiUsageMetricsIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: UpdateUsageMetricEndpointUpdateUsageMetricRequestModel;
};

export const useUpdateApiUsageMetricsId = (
  options: UseMutationOptions<
    UpdateUsageMetricEndpointProductUpdateUsageMetricResponseModel,
    Error,
    UseUpdateApiUsageMetricsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiUsageMetricsIdArgs) =>
      apiFetch(
        buildUrl("/usage-metrics/{id}", { id: args.id }),
        updateUsageMetricEndpointProductUpdateUsageMetricResponseModel,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Usage Metrics"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
