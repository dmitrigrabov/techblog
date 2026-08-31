import {
  deleteCustomerSettingsEndpointProductDeleteCustomerSettingsResponseModel,
  type DeleteCustomerSettingsEndpointProductDeleteCustomerSettingsResponseModel,
} from "packages/models/src/deleteCustomerSettingsEndpointProductDeleteCustomerSettingsResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiPaymentsSettingsCustomersIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
};

export type DeleteApiPaymentsSettingsCustomersIdBody = void;

export const useDeleteApiPaymentsSettingsCustomersId = (
  options: UseMutationOptions<
    DeleteCustomerSettingsEndpointProductDeleteCustomerSettingsResponseModel,
    Error,
    UseDeleteApiPaymentsSettingsCustomersIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiPaymentsSettingsCustomersIdArgs) =>
      apiFetch(
        buildUrl("/payments/settings/customers/{id}", { id: args.id }),
        deleteCustomerSettingsEndpointProductDeleteCustomerSettingsResponseModel,
        { method: "DELETE" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Customers"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
