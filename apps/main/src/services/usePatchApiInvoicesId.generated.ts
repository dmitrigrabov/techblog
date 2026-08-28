import type { Stable20240101PatchInvoiceRequest } from "packages/models/src/stable20240101PatchInvoiceRequest.generated.ts";
import { invoice, type Invoice } from "packages/models/src/invoice.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UsePatchApiInvoicesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: Stable20240101PatchInvoiceRequest;
};

export const usePatchApiInvoicesId = (
  options: UseMutationOptions<Invoice, Error, UsePatchApiInvoicesIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UsePatchApiInvoicesIdArgs) =>
      apiFetch(buildUrl("/invoices/{id}", { id: args.id }), invoice, {
        method: "PATCH",
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
