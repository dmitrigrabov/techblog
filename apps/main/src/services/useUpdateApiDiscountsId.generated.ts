import type { UpdateDiscountRequest } from "packages/models/src/updateDiscountRequest.generated.ts";
import {
  discountResponse,
  type DiscountResponse,
} from "packages/models/src/discountResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiDiscountsIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateDiscountRequest;
};

export const useUpdateApiDiscountsId = (
  options: UseMutationOptions<DiscountResponse, Error, UseUpdateApiDiscountsIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiDiscountsIdArgs) =>
      apiFetch(buildUrl("/discounts/{id}", { id: args.id }), discountResponse, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Discounts"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
