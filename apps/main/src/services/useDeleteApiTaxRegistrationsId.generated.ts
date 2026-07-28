import {
  deleteTaxRegistrationEndpointProductDeleteTaxRegistrationResponseModel,
  type DeleteTaxRegistrationEndpointProductDeleteTaxRegistrationResponseModel,
} from "packages/models/src/deleteTaxRegistrationEndpointProductDeleteTaxRegistrationResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiTaxRegistrationsIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
};

export type DeleteApiTaxRegistrationsIdBody = void;

export const useDeleteApiTaxRegistrationsId = (
  options: UseMutationOptions<
    DeleteTaxRegistrationEndpointProductDeleteTaxRegistrationResponseModel,
    Error,
    UseDeleteApiTaxRegistrationsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiTaxRegistrationsIdArgs) =>
      apiFetch(
        buildUrl("/tax-registrations/{id}", { id: args.id }),
        deleteTaxRegistrationEndpointProductDeleteTaxRegistrationResponseModel,
        { method: "DELETE" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Tax Registrations"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
