import {
  productArchiveTaxRateResponseModel,
  type ProductArchiveTaxRateResponseModel,
} from "packages/models/src/productArchiveTaxRateResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiTaxRatesIdArchiveArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type CreateApiTaxRatesIdArchiveBody = void;

export const useCreateApiTaxRatesIdArchive = (
  options: UseMutationOptions<
    ProductArchiveTaxRateResponseModel,
    Error,
    UseCreateApiTaxRatesIdArchiveArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiTaxRatesIdArchiveArgs) =>
      apiFetch(
        buildUrl("/tax-rates/{id}/archive", { id: args.id }),
        productArchiveTaxRateResponseModel,
        { method: "POST" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Tax Rates"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
