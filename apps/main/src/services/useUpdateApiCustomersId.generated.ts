import type { CreateOrUpdateCustomerRequest } from "packages/models/src/createOrUpdateCustomerRequest.generated.ts";
import { customer, type Customer } from "packages/models/src/customer.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiCustomersIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateOrUpdateCustomerRequest;
};

export const useUpdateApiCustomersId = (
  options: UseMutationOptions<Customer, Error, UseUpdateApiCustomersIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiCustomersIdArgs) =>
      apiFetch(buildUrl("/customers/{id}", { id: args.id }), customer, {
        method: "PUT",
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
