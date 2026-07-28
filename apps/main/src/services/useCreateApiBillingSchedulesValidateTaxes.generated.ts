import type { CreateBillingScheduleRequest } from "packages/models/src/createBillingScheduleRequest.generated.ts";
import { z } from "zod";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiBillingSchedulesValidateTaxesArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateBillingScheduleRequest;
};

export const useCreateApiBillingSchedulesValidateTaxesResponse = z.void();

export type UseCreateApiBillingSchedulesValidateTaxesResponse = void;

export const useCreateApiBillingSchedulesValidateTaxes = (
  options: UseMutationOptions<
    UseCreateApiBillingSchedulesValidateTaxesResponse,
    Error,
    UseCreateApiBillingSchedulesValidateTaxesArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiBillingSchedulesValidateTaxesArgs) =>
      apiFetch(
        "/billing-schedules/validate-taxes",
        useCreateApiBillingSchedulesValidateTaxesResponse,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Billing Schedules"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
