import type { CreateInvoiceSettingsEndpointCreateInvoiceSettingsRequestModel } from "packages/models/src/createInvoiceSettingsEndpointCreateInvoiceSettingsRequestModel.generated.ts";
import {
  createInvoiceSettingsEndpointProductCreateInvoiceSettingsResponseModel,
  type CreateInvoiceSettingsEndpointProductCreateInvoiceSettingsResponseModel,
} from "packages/models/src/createInvoiceSettingsEndpointProductCreateInvoiceSettingsResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiPaymentsSettingsInvoicesArgs = {
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: CreateInvoiceSettingsEndpointCreateInvoiceSettingsRequestModel;
};

export const useCreateApiPaymentsSettingsInvoices = (
  options: UseMutationOptions<
    CreateInvoiceSettingsEndpointProductCreateInvoiceSettingsResponseModel,
    Error,
    UseCreateApiPaymentsSettingsInvoicesArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiPaymentsSettingsInvoicesArgs) =>
      apiFetch(
        "/payments/settings/invoices",
        createInvoiceSettingsEndpointProductCreateInvoiceSettingsResponseModel,
        {
          method: "POST",
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
