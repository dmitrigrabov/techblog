import type { CreateOrUpdateCustomerRequest } from "packages/models/src/createOrUpdateCustomerRequest.generated.ts";
import { customer, type Customer } from "packages/models/src/customer.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiCustomersArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateOrUpdateCustomerRequest;
};

export const useCreateApiCustomers = (
  options: UseMutationOptions<Customer, Error, UseCreateApiCustomersArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCustomersArgs) =>
      apiFetch("/customers", customer, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Customers"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
