import type { CreateCustomerAliasRequestModel } from "packages/models/src/createCustomerAliasRequestModel.generated.ts";
import {
  customerAliasResponseModel,
  type CustomerAliasResponseModel,
} from "packages/models/src/customerAliasResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiCustomerAliasesArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  "Idempotency-Key"?: string | undefined;
  body: CreateCustomerAliasRequestModel;
};

export const useCreateApiCustomerAliases = (
  options: UseMutationOptions<
    CustomerAliasResponseModel,
    Error,
    UseCreateApiCustomerAliasesArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCustomerAliasesArgs) =>
      apiFetch("/customer-aliases", customerAliasResponseModel, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Customer Aliases"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
