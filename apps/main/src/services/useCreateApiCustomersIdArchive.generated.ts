import { customer, type Customer } from "packages/models/src/customer.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiCustomersIdArchiveArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type CreateApiCustomersIdArchiveBody = void;

export const useCreateApiCustomersIdArchive = (
  options: UseMutationOptions<Customer, Error, UseCreateApiCustomersIdArchiveArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCustomersIdArchiveArgs) =>
      apiFetch(buildUrl("/customers/{id}/archive", { id: args.id }), customer, { method: "POST" }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Customers"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
