import {
  discountResponse,
  type DiscountResponse,
} from "packages/models/src/discountResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiDiscountsIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiDiscountsIdBody = void;

export const useDeleteApiDiscountsId = (
  options: UseMutationOptions<DiscountResponse, Error, UseDeleteApiDiscountsIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiDiscountsIdArgs) =>
      apiFetch(buildUrl("/discounts/{id}", { id: args.id }), discountResponse, {
        method: "DELETE",
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Discounts"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
