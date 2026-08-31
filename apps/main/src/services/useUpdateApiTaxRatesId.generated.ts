import type { UpdateTaxRateRequest } from "packages/models/src/updateTaxRateRequest.generated.ts";
import {
  taxRateResponse,
  type TaxRateResponse,
} from "packages/models/src/taxRateResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiTaxRatesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateTaxRateRequest;
};

export const useUpdateApiTaxRatesId = (
  options: UseMutationOptions<TaxRateResponse, Error, UseUpdateApiTaxRatesIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiTaxRatesIdArgs) =>
      apiFetch(buildUrl("/tax-rates/{id}", { id: args.id }), taxRateResponse, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Tax Rates"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
