import type { CustomerOrganizationMembers } from "packages/models/src/customerOrganizationMembers.generated.ts";
import {
  customerOrganization,
  type CustomerOrganization,
} from "packages/models/src/customerOrganization.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiCustomerOrganizationsIdMembersArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CustomerOrganizationMembers;
};

export const useCreateApiCustomerOrganizationsIdMembers = (
  options: UseMutationOptions<
    CustomerOrganization,
    Error,
    UseCreateApiCustomerOrganizationsIdMembersArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCustomerOrganizationsIdMembersArgs) =>
      apiFetch(
        buildUrl("/customer-organizations/{id}/members", { id: args.id }),
        customerOrganization,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Organizations"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
