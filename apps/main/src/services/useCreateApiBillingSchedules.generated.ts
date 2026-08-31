import type { CreateBillingScheduleRequest } from "packages/models/src/createBillingScheduleRequest.generated.ts";
import {
  billingScheduleResponse,
  type BillingScheduleResponse,
} from "packages/models/src/billingScheduleResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiBillingSchedulesArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateBillingScheduleRequest;
};

export const useCreateApiBillingSchedules = (
  options: UseMutationOptions<
    BillingScheduleResponse,
    Error,
    UseCreateApiBillingSchedulesArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiBillingSchedulesArgs) =>
      apiFetch("/billing-schedules", billingScheduleResponse, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Billing Schedules"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
