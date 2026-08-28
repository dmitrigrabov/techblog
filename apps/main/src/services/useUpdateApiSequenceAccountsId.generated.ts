import type { UpdateSequenceAccountProductEndpointUpdateSequenceAccountRequest } from "packages/models/src/updateSequenceAccountProductEndpointUpdateSequenceAccountRequest.generated.ts";
import {
  sequenceAccount,
  type SequenceAccount,
} from "packages/models/src/sequenceAccount.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiSequenceAccountsIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: UpdateSequenceAccountProductEndpointUpdateSequenceAccountRequest;
};

export const useUpdateApiSequenceAccountsId = (
  options: UseMutationOptions<
    SequenceAccount,
    Error,
    UseUpdateApiSequenceAccountsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiSequenceAccountsIdArgs) =>
      apiFetch(buildUrl("/sequence-accounts/{id}", { id: args.id }), sequenceAccount, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Accounts"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
