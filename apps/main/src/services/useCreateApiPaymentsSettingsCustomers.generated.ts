import type { CreateCustomerSettingsEndpointCreateCustomerSettingsRequestModel } from "packages/models/src/createCustomerSettingsEndpointCreateCustomerSettingsRequestModel.generated.ts";
import {
  createCustomerSettingsEndpointProductCreateCustomerSettingsResponseModel,
  type CreateCustomerSettingsEndpointProductCreateCustomerSettingsResponseModel,
} from "packages/models/src/createCustomerSettingsEndpointProductCreateCustomerSettingsResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiPaymentsSettingsCustomersArgs = {
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: CreateCustomerSettingsEndpointCreateCustomerSettingsRequestModel;
};

export const useCreateApiPaymentsSettingsCustomers = (
  options: UseMutationOptions<
    CreateCustomerSettingsEndpointProductCreateCustomerSettingsResponseModel,
    Error,
    UseCreateApiPaymentsSettingsCustomersArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiPaymentsSettingsCustomersArgs) =>
      apiFetch(
        "/payments/settings/customers",
        createCustomerSettingsEndpointProductCreateCustomerSettingsResponseModel,
        {
          method: "POST",
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
