import {
  creditGrantResponse,
  type CreditGrantResponse,
} from "packages/models/src/creditGrantResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiCreditsIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiCreditsIdBody = void;

export const useDeleteApiCreditsId = (
  options: UseMutationOptions<CreditGrantResponse, Error, UseDeleteApiCreditsIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiCreditsIdArgs) =>
      apiFetch(buildUrl("/credits/{id}", { id: args.id }), creditGrantResponse, {
        method: "DELETE",
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Credits"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
