import type { UpdateCustomerAliasRequestModel } from "packages/models/src/updateCustomerAliasRequestModel.generated.ts";
import {
  customerAliasResponseModel,
  type CustomerAliasResponseModel,
} from "packages/models/src/customerAliasResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiCustomerAliasesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateCustomerAliasRequestModel;
};

export const useUpdateApiCustomerAliasesId = (
  options: UseMutationOptions<
    CustomerAliasResponseModel,
    Error,
    UseUpdateApiCustomerAliasesIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiCustomerAliasesIdArgs) =>
      apiFetch(buildUrl("/customer-aliases/{id}", { id: args.id }), customerAliasResponseModel, {
        method: "PUT",
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
