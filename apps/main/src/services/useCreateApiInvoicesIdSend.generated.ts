import { invoice, type Invoice } from "packages/models/src/invoice.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiInvoicesIdSendArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type CreateApiInvoicesIdSendBody = void;

export const useCreateApiInvoicesIdSend = (
  options: UseMutationOptions<Invoice, Error, UseCreateApiInvoicesIdSendArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiInvoicesIdSendArgs) =>
      apiFetch(buildUrl("/invoices/{id}/send", { id: args.id }), invoice, { method: "POST" }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Invoices"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
