import type { CreateTaxRegistrationRequestModel } from "packages/models/src/createTaxRegistrationRequestModel.generated.ts";
import {
  productCreateTaxRegistrationResponseModel,
  type ProductCreateTaxRegistrationResponseModel,
} from "packages/models/src/productCreateTaxRegistrationResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiTaxRegistrationsArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateTaxRegistrationRequestModel;
};

export const useCreateApiTaxRegistrations = (
  options: UseMutationOptions<
    ProductCreateTaxRegistrationResponseModel,
    Error,
    UseCreateApiTaxRegistrationsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiTaxRegistrationsArgs) =>
      apiFetch("/tax-registrations", productCreateTaxRegistrationResponseModel, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Tax Registrations"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
