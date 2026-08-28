import type { UpdateCustomerSettingsEndpointUpdateCustomerSettingsRequestModel } from "packages/models/src/updateCustomerSettingsEndpointUpdateCustomerSettingsRequestModel.generated.ts";
import {
  updateCustomerSettingsEndpointProductUpdateCustomerSettingsResponseModel,
  type UpdateCustomerSettingsEndpointProductUpdateCustomerSettingsResponseModel,
} from "packages/models/src/updateCustomerSettingsEndpointProductUpdateCustomerSettingsResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiPaymentsSettingsCustomersIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: UpdateCustomerSettingsEndpointUpdateCustomerSettingsRequestModel;
};

export const useUpdateApiPaymentsSettingsCustomersId = (
  options: UseMutationOptions<
    UpdateCustomerSettingsEndpointProductUpdateCustomerSettingsResponseModel,
    Error,
    UseUpdateApiPaymentsSettingsCustomersIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiPaymentsSettingsCustomersIdArgs) =>
      apiFetch(
        buildUrl("/payments/settings/customers/{id}", { id: args.id }),
        updateCustomerSettingsEndpointProductUpdateCustomerSettingsResponseModel,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Customers"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
