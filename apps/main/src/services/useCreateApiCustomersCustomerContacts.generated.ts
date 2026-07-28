import type { ContactRequestModel } from "packages/models/src/contactRequestModel.generated.ts";
import { contact, type Contact } from "packages/models/src/contact.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiCustomersCustomerContactsArgs = {
  customer: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: ContactRequestModel;
};

export const useCreateApiCustomersCustomerContacts = (
  options: UseMutationOptions<
    Contact,
    Error,
    UseCreateApiCustomersCustomerContactsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCustomersCustomerContactsArgs) =>
      apiFetch(buildUrl("/customers/{customer}/contacts", { customer: args.customer }), contact, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Contacts"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
