import type { CreateCreditGrantRequest } from "packages/models/src/createCreditGrantRequest.generated.ts";
import {
  creditGrantResponse2,
  type CreditGrantResponse2,
} from "packages/models/src/creditGrantResponse2.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiCreditsArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateCreditGrantRequest;
};

export const useCreateApiCredits = (
  options: UseMutationOptions<CreditGrantResponse2, Error, UseCreateApiCreditsArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCreditsArgs) =>
      apiFetch("/credits", creditGrantResponse2, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Credits"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
