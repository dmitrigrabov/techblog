import {
  customerAliasResponseModel,
  type CustomerAliasResponseModel,
} from "packages/models/src/customerAliasResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiCustomerAliasesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiCustomerAliasesIdBody = void;

export const useDeleteApiCustomerAliasesId = (
  options: UseMutationOptions<
    CustomerAliasResponseModel,
    Error,
    UseDeleteApiCustomerAliasesIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiCustomerAliasesIdArgs) =>
      apiFetch(buildUrl("/customer-aliases/{id}", { id: args.id }), customerAliasResponseModel, {
        method: "DELETE",
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Customer Aliases"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
