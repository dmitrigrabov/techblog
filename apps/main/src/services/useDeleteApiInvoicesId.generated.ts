import {
  deleteInvoiceEndpointProductDeleteInvoiceResponseModel,
  type DeleteInvoiceEndpointProductDeleteInvoiceResponseModel,
} from "packages/models/src/deleteInvoiceEndpointProductDeleteInvoiceResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiInvoicesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiInvoicesIdBody = void;

export const useDeleteApiInvoicesId = (
  options: UseMutationOptions<
    DeleteInvoiceEndpointProductDeleteInvoiceResponseModel,
    Error,
    UseDeleteApiInvoicesIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiInvoicesIdArgs) =>
      apiFetch(
        buildUrl("/invoices/{id}", { id: args.id }),
        deleteInvoiceEndpointProductDeleteInvoiceResponseModel,
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
