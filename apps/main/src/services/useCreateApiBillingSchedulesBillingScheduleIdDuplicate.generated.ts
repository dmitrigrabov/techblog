import type { DuplicateBillingScheduleRequest } from "packages/models/src/duplicateBillingScheduleRequest.generated.ts";
import {
  billingScheduleResponse,
  type BillingScheduleResponse,
} from "packages/models/src/billingScheduleResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiBillingSchedulesBillingScheduleIdDuplicateArgs = {
  billingScheduleId: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: DuplicateBillingScheduleRequest;
};

export const useCreateApiBillingSchedulesBillingScheduleIdDuplicate = (
  options: UseMutationOptions<
    BillingScheduleResponse,
    Error,
    UseCreateApiBillingSchedulesBillingScheduleIdDuplicateArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiBillingSchedulesBillingScheduleIdDuplicateArgs) =>
      apiFetch(
        buildUrl("/billing-schedules/{billingScheduleId}/duplicate", {
          billingScheduleId: args.billingScheduleId,
        }),
        billingScheduleResponse,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Billing Schedules"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
