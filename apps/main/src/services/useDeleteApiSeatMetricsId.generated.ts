import { seatMetric, type SeatMetric } from "packages/models/src/seatMetric.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiSeatMetricsIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
};

export type DeleteApiSeatMetricsIdBody = void;

export const useDeleteApiSeatMetricsId = (
  options: UseMutationOptions<SeatMetric, Error, UseDeleteApiSeatMetricsIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiSeatMetricsIdArgs) =>
      apiFetch(buildUrl("/seat-metrics/{id}", { id: args.id }), seatMetric, { method: "DELETE" }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Seat Metrics"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
