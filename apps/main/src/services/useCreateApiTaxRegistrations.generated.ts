import type { CreateTaxRegistrationEndpointCreateTaxRegistrationRequestModel } from "packages/models/src/createTaxRegistrationEndpointCreateTaxRegistrationRequestModel.generated.ts";
import {
  createTaxRegistrationEndpointProductCreateTaxRegistrationResponseModel,
  type CreateTaxRegistrationEndpointProductCreateTaxRegistrationResponseModel,
} from "packages/models/src/createTaxRegistrationEndpointProductCreateTaxRegistrationResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiTaxRegistrationsArgs = {
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: CreateTaxRegistrationEndpointCreateTaxRegistrationRequestModel;
};

export const useCreateApiTaxRegistrations = (
  options: UseMutationOptions<
    CreateTaxRegistrationEndpointProductCreateTaxRegistrationResponseModel,
    Error,
    UseCreateApiTaxRegistrationsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiTaxRegistrationsArgs) =>
      apiFetch(
        "/tax-registrations",
        createTaxRegistrationEndpointProductCreateTaxRegistrationResponseModel,
        {
          method: "POST",
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
