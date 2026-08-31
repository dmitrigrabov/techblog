import {
  billingScheduleResponse,
  type BillingScheduleResponse,
} from "packages/models/src/billingScheduleResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiBillingSchedulesBillingScheduleIdActivateArgs = {
  billingScheduleId: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type UpdateApiBillingSchedulesBillingScheduleIdActivateBody = void;

export const useUpdateApiBillingSchedulesBillingScheduleIdActivate = (
  options: UseMutationOptions<
    BillingScheduleResponse,
    Error,
    UseUpdateApiBillingSchedulesBillingScheduleIdActivateArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiBillingSchedulesBillingScheduleIdActivateArgs) =>
      apiFetch(
        buildUrl("/billing-schedules/{billingScheduleId}/activate", {
          billingScheduleId: args.billingScheduleId,
        }),
        billingScheduleResponse,
        { method: "PUT" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Billing Schedules"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
