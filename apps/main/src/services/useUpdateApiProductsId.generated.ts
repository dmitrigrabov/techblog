import type { Stable20240730ProductRequest } from "packages/models/src/stable20240730ProductRequest.generated.ts";
import {
  stable20240730ProductResponse,
  type Stable20240730ProductResponse,
} from "packages/models/src/stable20240730ProductResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiProductsIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: Stable20240730ProductRequest;
};

export const useUpdateApiProductsId = (
  options: UseMutationOptions<
    Stable20240730ProductResponse,
    Error,
    UseUpdateApiProductsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiProductsIdArgs) =>
      apiFetch(buildUrl("/products/{id}", { id: args.id }), stable20240730ProductResponse, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Products"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
