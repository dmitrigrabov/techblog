import type { CreateUsageEventEndpointCreateUsageEventRequestModel } from "packages/models/src/createUsageEventEndpointCreateUsageEventRequestModel.generated.ts";
import {
  createUsageEventEndpointProductCreateUsageEventResponseModel,
  type CreateUsageEventEndpointProductCreateUsageEventResponseModel,
} from "packages/models/src/createUsageEventEndpointProductCreateUsageEventResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiUsageEventsArgs = {
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: CreateUsageEventEndpointCreateUsageEventRequestModel;
};

export const useCreateApiUsageEvents = (
  options: UseMutationOptions<
    CreateUsageEventEndpointProductCreateUsageEventResponseModel,
    Error,
    UseCreateApiUsageEventsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiUsageEventsArgs) =>
      apiFetch("/usage-events", createUsageEventEndpointProductCreateUsageEventResponseModel, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Usage Events"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
