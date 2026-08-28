import {
  deleteInvoiceSettingsEndpointProductDeleteInvoiceSettingsResponseModel,
  type DeleteInvoiceSettingsEndpointProductDeleteInvoiceSettingsResponseModel,
} from "packages/models/src/deleteInvoiceSettingsEndpointProductDeleteInvoiceSettingsResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiPaymentsSettingsInvoicesIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
};

export type DeleteApiPaymentsSettingsInvoicesIdBody = void;

export const useDeleteApiPaymentsSettingsInvoicesId = (
  options: UseMutationOptions<
    DeleteInvoiceSettingsEndpointProductDeleteInvoiceSettingsResponseModel,
    Error,
    UseDeleteApiPaymentsSettingsInvoicesIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiPaymentsSettingsInvoicesIdArgs) =>
      apiFetch(
        buildUrl("/payments/settings/invoices/{id}", { id: args.id }),
        deleteInvoiceSettingsEndpointProductDeleteInvoiceSettingsResponseModel,
        { method: "DELETE" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Invoices"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
