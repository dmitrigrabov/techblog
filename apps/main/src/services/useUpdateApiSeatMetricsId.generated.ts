import type { UpdateSeatMetricRequest } from "packages/models/src/updateSeatMetricRequest.generated.ts";
import { seatMetric, type SeatMetric } from "packages/models/src/seatMetric.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiSeatMetricsIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: UpdateSeatMetricRequest;
};

export const useUpdateApiSeatMetricsId = (
  options: UseMutationOptions<SeatMetric, Error, UseUpdateApiSeatMetricsIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiSeatMetricsIdArgs) =>
      apiFetch(buildUrl("/seat-metrics/{id}", { id: args.id }), seatMetric, {
        method: "PUT",
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
