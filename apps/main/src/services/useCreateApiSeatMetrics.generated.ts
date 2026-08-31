import type { CreateSeatMetricRequest } from "packages/models/src/createSeatMetricRequest.generated.ts";
import { seatMetric, type SeatMetric } from "packages/models/src/seatMetric.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiSeatMetricsArgs = {
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: CreateSeatMetricRequest;
};

export const useCreateApiSeatMetrics = (
  options: UseMutationOptions<SeatMetric, Error, UseCreateApiSeatMetricsArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiSeatMetricsArgs) =>
      apiFetch("/seat-metrics", seatMetric, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Seat Metrics"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
