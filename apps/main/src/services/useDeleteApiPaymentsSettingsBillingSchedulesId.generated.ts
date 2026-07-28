import {
  billingScheduleSettings,
  type BillingScheduleSettings,
} from "packages/models/src/billingScheduleSettings.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiPaymentsSettingsBillingSchedulesIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
};

export type DeleteApiPaymentsSettingsBillingSchedulesIdBody = void;

export const useDeleteApiPaymentsSettingsBillingSchedulesId = (
  options: UseMutationOptions<
    BillingScheduleSettings,
    Error,
    UseDeleteApiPaymentsSettingsBillingSchedulesIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiPaymentsSettingsBillingSchedulesIdArgs) =>
      apiFetch(
        buildUrl("/payments/settings/billing-schedules/{id}", { id: args.id }),
        billingScheduleSettings,
        { method: "DELETE" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Billing Schedules"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
