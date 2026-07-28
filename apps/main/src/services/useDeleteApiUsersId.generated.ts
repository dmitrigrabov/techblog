import {
  sequenceUserResponse,
  type SequenceUserResponse,
} from "packages/models/src/sequenceUserResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiUsersIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
};

export type DeleteApiUsersIdBody = void;

export const useDeleteApiUsersId = (
  options: UseMutationOptions<SequenceUserResponse, Error, UseDeleteApiUsersIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiUsersIdArgs) =>
      apiFetch(buildUrl("/users/{id}", { id: args.id }), sequenceUserResponse, {
        method: "DELETE",
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Users"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
