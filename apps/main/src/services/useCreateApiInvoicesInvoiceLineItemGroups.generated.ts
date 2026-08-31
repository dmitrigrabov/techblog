import type { CreateLineItemGroupRequestModel } from "packages/models/src/createLineItemGroupRequestModel.generated.ts";
import {
  lineItemGroupResponseModel,
  type LineItemGroupResponseModel,
} from "packages/models/src/lineItemGroupResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiInvoicesInvoiceLineItemGroupsArgs = {
  invoice: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateLineItemGroupRequestModel;
};

export const useCreateApiInvoicesInvoiceLineItemGroups = (
  options: UseMutationOptions<
    LineItemGroupResponseModel,
    Error,
    UseCreateApiInvoicesInvoiceLineItemGroupsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiInvoicesInvoiceLineItemGroupsArgs) =>
      apiFetch(
        buildUrl("/invoices/{invoice}/line-item-groups", { invoice: args.invoice }),
        lineItemGroupResponseModel,
        {
          method: "POST",
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
