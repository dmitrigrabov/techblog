import {
  lineItemGroupResponseModel,
  type LineItemGroupResponseModel,
} from "packages/models/src/lineItemGroupResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiInvoicesInvoiceLineItemGroupsIdArgs = {
  invoice: string;
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiInvoicesInvoiceLineItemGroupsIdBody = void;

export const useDeleteApiInvoicesInvoiceLineItemGroupsId = (
  options: UseMutationOptions<
    LineItemGroupResponseModel,
    Error,
    UseDeleteApiInvoicesInvoiceLineItemGroupsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiInvoicesInvoiceLineItemGroupsIdArgs) =>
      apiFetch(
        buildUrl("/invoices/{invoice}/line-item-groups/{id}", {
          invoice: args.invoice,
          id: args.id,
        }),
        lineItemGroupResponseModel,
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
