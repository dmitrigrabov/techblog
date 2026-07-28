import {
  taxRateResponse,
  type TaxRateResponse,
} from "packages/models/src/taxRateResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiTaxRatesIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
};

export type DeleteApiTaxRatesIdBody = void;

export const useDeleteApiTaxRatesId = (
  options: UseMutationOptions<TaxRateResponse, Error, UseDeleteApiTaxRatesIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiTaxRatesIdArgs) =>
      apiFetch(buildUrl("/tax-rates/{id}", { id: args.id }), taxRateResponse, { method: "DELETE" }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Tax Rates"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
