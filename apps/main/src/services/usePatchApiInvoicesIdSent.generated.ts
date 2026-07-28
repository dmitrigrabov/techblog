import type { PatchSentInvoiceEndpointPatchSentInvoiceRequest } from "packages/models/src/patchSentInvoiceEndpointPatchSentInvoiceRequest.generated.ts";
import { invoice, type Invoice } from "packages/models/src/invoice.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UsePatchApiInvoicesIdSentArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: PatchSentInvoiceEndpointPatchSentInvoiceRequest;
};

export const usePatchApiInvoicesIdSent = (
  options: UseMutationOptions<Invoice, Error, UsePatchApiInvoicesIdSentArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UsePatchApiInvoicesIdSentArgs) =>
      apiFetch(buildUrl("/invoices/{id}/sent", { id: args.id }), invoice, {
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
