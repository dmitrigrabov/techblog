import type { UpdateInvoicePaymentStatusEndpointRequestModel } from "packages/models/src/updateInvoicePaymentStatusEndpointRequestModel.generated.ts";
import { invoice, type Invoice } from "packages/models/src/invoice.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiInvoicesIdPaymentStatusArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateInvoicePaymentStatusEndpointRequestModel;
};

export const useUpdateApiInvoicesIdPaymentStatus = (
  options: UseMutationOptions<
    Invoice,
    Error,
    UseUpdateApiInvoicesIdPaymentStatusArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiInvoicesIdPaymentStatusArgs) =>
      apiFetch(buildUrl("/invoices/{id}/payment-status", { id: args.id }), invoice, {
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
