import { z } from "zod";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiInvoicesFixBillingRunsArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export const useCreateApiInvoicesFixBillingRunsResponse = z.void();

export type UseCreateApiInvoicesFixBillingRunsResponse = void;

export type CreateApiInvoicesFixBillingRunsBody = void;

export const useCreateApiInvoicesFixBillingRuns = (
  options: UseMutationOptions<
    UseCreateApiInvoicesFixBillingRunsResponse,
    Error,
    UseCreateApiInvoicesFixBillingRunsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiInvoicesFixBillingRunsArgs) =>
      apiFetch("/invoices/fix-billing-runs", useCreateApiInvoicesFixBillingRunsResponse, {
        method: "POST",
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Invoices"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
