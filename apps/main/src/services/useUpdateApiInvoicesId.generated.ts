import type { Stable20240101UpdateInvoiceRequest } from "packages/models/src/stable20240101UpdateInvoiceRequest.generated.ts";
import {
  invoiceResponse,
  type InvoiceResponse,
} from "packages/models/src/invoiceResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiInvoicesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: Stable20240101UpdateInvoiceRequest;
};

export const useUpdateApiInvoicesId = (
  options: UseMutationOptions<InvoiceResponse, Error, UseUpdateApiInvoicesIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiInvoicesIdArgs) =>
      apiFetch(buildUrl("/invoices/{id}", { id: args.id }), invoiceResponse, {
        method: "PUT",
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
