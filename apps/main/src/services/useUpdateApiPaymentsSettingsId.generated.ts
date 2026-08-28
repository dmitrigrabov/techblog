import type { UpdateAccountPaymentSettingsEndpointUpdateAccountPaymentSettingsRequest } from "packages/models/src/updateAccountPaymentSettingsEndpointUpdateAccountPaymentSettingsRequest.generated.ts";
import {
  accountPaymentSettings,
  type AccountPaymentSettings,
} from "packages/models/src/accountPaymentSettings.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiPaymentsSettingsIdArgs = {
  id: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: UpdateAccountPaymentSettingsEndpointUpdateAccountPaymentSettingsRequest;
};

export const useUpdateApiPaymentsSettingsId = (
  options: UseMutationOptions<
    AccountPaymentSettings,
    Error,
    UseUpdateApiPaymentsSettingsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiPaymentsSettingsIdArgs) =>
      apiFetch(buildUrl("/payments/settings/{id}", { id: args.id }), accountPaymentSettings, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Account Settings"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
