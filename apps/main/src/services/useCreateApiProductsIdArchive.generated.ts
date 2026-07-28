import {
  stable20240509ProductResponse,
  type Stable20240509ProductResponse,
} from "packages/models/src/stable20240509ProductResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiProductsIdArchiveArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type CreateApiProductsIdArchiveBody = void;

export const useCreateApiProductsIdArchive = (
  options: UseMutationOptions<
    Stable20240509ProductResponse,
    Error,
    UseCreateApiProductsIdArchiveArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiProductsIdArchiveArgs) =>
      apiFetch(buildUrl("/products/{id}/archive", { id: args.id }), stable20240509ProductResponse, {
        method: "POST",
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Products"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
