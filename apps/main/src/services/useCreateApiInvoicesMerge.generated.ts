import type { MergeInvoicesEndpointRequestBody } from "packages/models/src/mergeInvoicesEndpointRequestBody.generated.ts";
import { invoice, type Invoice } from "packages/models/src/invoice.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiInvoicesMergeArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: MergeInvoicesEndpointRequestBody;
};

export const useCreateApiInvoicesMerge = (
  options: UseMutationOptions<Invoice, Error, UseCreateApiInvoicesMergeArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiInvoicesMergeArgs) =>
      apiFetch("/invoices/merge", invoice, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Invoices"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
