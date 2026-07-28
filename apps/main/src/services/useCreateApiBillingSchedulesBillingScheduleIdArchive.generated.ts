import {
  billingScheduleResponse,
  type BillingScheduleResponse,
} from "packages/models/src/billingScheduleResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiBillingSchedulesBillingScheduleIdArchiveArgs = {
  billingScheduleId: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type CreateApiBillingSchedulesBillingScheduleIdArchiveBody = void;

export const useCreateApiBillingSchedulesBillingScheduleIdArchive = (
  options: UseMutationOptions<
    BillingScheduleResponse,
    Error,
    UseCreateApiBillingSchedulesBillingScheduleIdArchiveArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiBillingSchedulesBillingScheduleIdArchiveArgs) =>
      apiFetch(
        buildUrl("/billing-schedules/{billingScheduleId}/archive", {
          billingScheduleId: args.billingScheduleId,
        }),
        billingScheduleResponse,
        { method: "POST" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Billing Schedules"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
