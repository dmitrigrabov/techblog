import type { ContactRequestModel } from "packages/models/src/contactRequestModel.generated.ts";
import { contact, type Contact } from "packages/models/src/contact.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiCustomersCustomerContactsIdArgs = {
  customer: string;
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: ContactRequestModel;
};

export const useUpdateApiCustomersCustomerContactsId = (
  options: UseMutationOptions<
    Contact,
    Error,
    UseUpdateApiCustomersCustomerContactsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiCustomersCustomerContactsIdArgs) =>
      apiFetch(
        buildUrl("/customers/{customer}/contacts/{id}", { customer: args.customer, id: args.id }),
        contact,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Contacts"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
