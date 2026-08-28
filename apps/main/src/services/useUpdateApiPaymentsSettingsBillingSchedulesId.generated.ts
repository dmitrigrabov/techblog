import type { UpdateBillingScheduleSettingsEndpointUpdateBillingScheduleSettingsRequestModel } from "packages/models/src/updateBillingScheduleSettingsEndpointUpdateBillingScheduleSettingsRequestModel.generated.ts";
import {
  billingScheduleSettings,
  type BillingScheduleSettings,
} from "packages/models/src/billingScheduleSettings.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiPaymentsSettingsBillingSchedulesIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: UpdateBillingScheduleSettingsEndpointUpdateBillingScheduleSettingsRequestModel;
};

export const useUpdateApiPaymentsSettingsBillingSchedulesId = (
  options: UseMutationOptions<
    BillingScheduleSettings,
    Error,
    UseUpdateApiPaymentsSettingsBillingSchedulesIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiPaymentsSettingsBillingSchedulesIdArgs) =>
      apiFetch(
        buildUrl("/payments/settings/billing-schedules/{id}", { id: args.id }),
        billingScheduleSettings,
        {
          method: "PUT",
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
