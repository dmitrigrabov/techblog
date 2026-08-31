import type { ReconcileInvoicesWithIntegrationEndpointReconcileInvoicesWithIntegrationRequest } from "packages/models/src/reconcileInvoicesWithIntegrationEndpointReconcileInvoicesWithIntegrationRequest.generated.ts";
import { z } from "zod";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiInvoicesReconcileWithIntegrationArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: ReconcileInvoicesWithIntegrationEndpointReconcileInvoicesWithIntegrationRequest;
};

export const useCreateApiInvoicesReconcileWithIntegrationResponse = z.void();

export type UseCreateApiInvoicesReconcileWithIntegrationResponse = void;

export const useCreateApiInvoicesReconcileWithIntegration = (
  options: UseMutationOptions<
    UseCreateApiInvoicesReconcileWithIntegrationResponse,
    Error,
    UseCreateApiInvoicesReconcileWithIntegrationArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiInvoicesReconcileWithIntegrationArgs) =>
      apiFetch(
        "/invoices/reconcile-with-integration",
        useCreateApiInvoicesReconcileWithIntegrationResponse,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Invoices"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
