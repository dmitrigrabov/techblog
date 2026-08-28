import type { Stable20240101CreateOrUpdateLineItem } from "packages/models/src/stable20240101CreateOrUpdateLineItem.generated.ts";
import {
  stable20240101LineItemResponse,
  type Stable20240101LineItemResponse,
} from "packages/models/src/stable20240101LineItemResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiInvoicesInvoiceLineItemsArgs = {
  invoice: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: Stable20240101CreateOrUpdateLineItem;
};

export const useCreateApiInvoicesInvoiceLineItems = (
  options: UseMutationOptions<
    Stable20240101LineItemResponse,
    Error,
    UseCreateApiInvoicesInvoiceLineItemsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiInvoicesInvoiceLineItemsArgs) =>
      apiFetch(
        buildUrl("/invoices/{invoice}/line-items", { invoice: args.invoice }),
        stable20240101LineItemResponse,
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
