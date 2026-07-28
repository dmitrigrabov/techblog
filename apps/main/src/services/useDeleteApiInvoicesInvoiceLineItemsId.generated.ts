import {
  stable20240101LineItemResponse,
  type Stable20240101LineItemResponse,
} from "packages/models/src/stable20240101LineItemResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiInvoicesInvoiceLineItemsIdArgs = {
  invoice: string;
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiInvoicesInvoiceLineItemsIdBody = void;

export const useDeleteApiInvoicesInvoiceLineItemsId = (
  options: UseMutationOptions<
    Stable20240101LineItemResponse,
    Error,
    UseDeleteApiInvoicesInvoiceLineItemsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiInvoicesInvoiceLineItemsIdArgs) =>
      apiFetch(
        buildUrl("/invoices/{invoice}/line-items/{id}", { invoice: args.invoice, id: args.id }),
        stable20240101LineItemResponse,
        { method: "DELETE" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Invoice Line Items"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
