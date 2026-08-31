import type { UpdateBillingScheduleRequest } from "packages/models/src/updateBillingScheduleRequest.generated.ts";
import {
  billingScheduleResponse,
  type BillingScheduleResponse,
} from "packages/models/src/billingScheduleResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiBillingSchedulesBillingScheduleIdArgs = {
  billingScheduleId: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateBillingScheduleRequest;
};

export const useUpdateApiBillingSchedulesBillingScheduleId = (
  options: UseMutationOptions<
    BillingScheduleResponse,
    Error,
    UseUpdateApiBillingSchedulesBillingScheduleIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiBillingSchedulesBillingScheduleIdArgs) =>
      apiFetch(
        buildUrl("/billing-schedules/{billingScheduleId}", {
          billingScheduleId: args.billingScheduleId,
        }),
        billingScheduleResponse,
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
