import type { CustomerOrganizationRequest } from "packages/models/src/customerOrganizationRequest.generated.ts";
import {
  customerOrganization,
  type CustomerOrganization,
} from "packages/models/src/customerOrganization.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiCustomerOrganizationsArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CustomerOrganizationRequest;
};

export const useCreateApiCustomerOrganizations = (
  options: UseMutationOptions<
    CustomerOrganization,
    Error,
    UseCreateApiCustomerOrganizationsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCustomerOrganizationsArgs) =>
      apiFetch("/customer-organizations", customerOrganization, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Organizations"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
