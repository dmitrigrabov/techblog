import type { CreateTaxRateRequest } from "packages/models/src/createTaxRateRequest.generated.ts";
import {
  taxRateResponse,
  type TaxRateResponse,
} from "packages/models/src/taxRateResponse.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiTaxRatesArgs = {
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: CreateTaxRateRequest;
};

export const useCreateApiTaxRates = (
  options: UseMutationOptions<TaxRateResponse, Error, UseCreateApiTaxRatesArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiTaxRatesArgs) =>
      apiFetch("/tax-rates", taxRateResponse, {
        method: "POST",
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
