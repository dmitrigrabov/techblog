import { contact, type Contact } from "packages/models/src/contact.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiCustomersCustomerContactsIdArchiveArgs = {
  customer: string;
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type CreateApiCustomersCustomerContactsIdArchiveBody = void;

export const useCreateApiCustomersCustomerContactsIdArchive = (
  options: UseMutationOptions<
    Contact,
    Error,
    UseCreateApiCustomersCustomerContactsIdArchiveArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCustomersCustomerContactsIdArchiveArgs) =>
      apiFetch(
        buildUrl("/customers/{customer}/contacts/{id}/archive", {
          customer: args.customer,
          id: args.id,
        }),
        contact,
        { method: "POST" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Contacts"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
