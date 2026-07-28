import type { CreateBillingScheduleSettingsEndpointCreateBillingScheduleSettingsRequestModel } from "packages/models/src/createBillingScheduleSettingsEndpointCreateBillingScheduleSettingsRequestModel.generated.ts";
import {
  billingScheduleSettings,
  type BillingScheduleSettings,
} from "packages/models/src/billingScheduleSettings.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiPaymentsSettingsBillingSchedulesArgs = {
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: CreateBillingScheduleSettingsEndpointCreateBillingScheduleSettingsRequestModel;
};

export const useCreateApiPaymentsSettingsBillingSchedules = (
  options: UseMutationOptions<
    BillingScheduleSettings,
    Error,
    UseCreateApiPaymentsSettingsBillingSchedulesArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiPaymentsSettingsBillingSchedulesArgs) =>
      apiFetch("/payments/settings/billing-schedules", billingScheduleSettings, {
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
