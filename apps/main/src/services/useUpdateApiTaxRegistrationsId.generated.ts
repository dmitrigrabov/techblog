import type { UpdateTaxRegistrationEndpointUpdateTaxRegistrationRequestModel } from "packages/models/src/updateTaxRegistrationEndpointUpdateTaxRegistrationRequestModel.generated.ts";
import {
  updateTaxRegistrationEndpointProductUpdateTaxRegistrationResponseModel,
  type UpdateTaxRegistrationEndpointProductUpdateTaxRegistrationResponseModel,
} from "packages/models/src/updateTaxRegistrationEndpointProductUpdateTaxRegistrationResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiTaxRegistrationsIdArgs = {
  id: string;
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: UpdateTaxRegistrationEndpointUpdateTaxRegistrationRequestModel;
};

export const useUpdateApiTaxRegistrationsId = (
  options: UseMutationOptions<
    UpdateTaxRegistrationEndpointProductUpdateTaxRegistrationResponseModel,
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
        updateTaxRegistrationEndpointProductUpdateTaxRegistrationResponseModel,
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
