import type { UpdateLineItemGroupRequestModel } from "packages/models/src/updateLineItemGroupRequestModel.generated.ts";
import {
  lineItemGroupResponseModel,
  type LineItemGroupResponseModel,
} from "packages/models/src/lineItemGroupResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiInvoicesInvoiceLineItemGroupsIdArgs = {
  invoice: string;
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateLineItemGroupRequestModel;
};

export const useUpdateApiInvoicesInvoiceLineItemGroupsId = (
  options: UseMutationOptions<
    LineItemGroupResponseModel,
    Error,
    UseUpdateApiInvoicesInvoiceLineItemGroupsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiInvoicesInvoiceLineItemGroupsIdArgs) =>
      apiFetch(
        buildUrl("/invoices/{invoice}/line-item-groups/{id}", {
          invoice: args.invoice,
          id: args.id,
        }),
        lineItemGroupResponseModel,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Invoice Line Items"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
