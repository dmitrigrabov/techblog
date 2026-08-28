import type { UpdateInvoiceSettingsEndpointUpdateInvoiceSettingsRequestModel } from "packages/models/src/updateInvoiceSettingsEndpointUpdateInvoiceSettingsRequestModel.generated.ts";
import {
  updateInvoiceSettingsEndpointProductUpdateInvoiceSettingsResponseModel,
  type UpdateInvoiceSettingsEndpointProductUpdateInvoiceSettingsResponseModel,
} from "packages/models/src/updateInvoiceSettingsEndpointProductUpdateInvoiceSettingsResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiPaymentsSettingsInvoicesIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: UpdateInvoiceSettingsEndpointUpdateInvoiceSettingsRequestModel;
};

export const useUpdateApiPaymentsSettingsInvoicesId = (
  options: UseMutationOptions<
    UpdateInvoiceSettingsEndpointProductUpdateInvoiceSettingsResponseModel,
    Error,
    UseUpdateApiPaymentsSettingsInvoicesIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiPaymentsSettingsInvoicesIdArgs) =>
      apiFetch(
        buildUrl("/payments/settings/invoices/{id}", { id: args.id }),
        updateInvoiceSettingsEndpointProductUpdateInvoiceSettingsResponseModel,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Invoices"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
