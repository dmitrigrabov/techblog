import type { UpdateTaxRegistrationRequestModel } from "packages/models/src/updateTaxRegistrationRequestModel.generated.ts";
import {
  productUpdateTaxRegistrationResponseModel,
  type ProductUpdateTaxRegistrationResponseModel,
} from "packages/models/src/productUpdateTaxRegistrationResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiTaxRegistrationsIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateTaxRegistrationRequestModel;
};

export const useUpdateApiTaxRegistrationsId = (
  options: UseMutationOptions<
    ProductUpdateTaxRegistrationResponseModel,
    Error,
    UseUpdateApiTaxRegistrationsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiTaxRegistrationsIdArgs) =>
      apiFetch(
        buildUrl("/tax-registrations/{id}", { id: args.id }),
        productUpdateTaxRegistrationResponseModel,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Tax Registrations"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
