import type { CreateSeatEventEndpointCreateSeatEventRequestModel } from "packages/models/src/createSeatEventEndpointCreateSeatEventRequestModel.generated.ts";
import {
  createSeatEventEndpointProductCreateSeatEventResponseModel,
  type CreateSeatEventEndpointProductCreateSeatEventResponseModel,
} from "packages/models/src/createSeatEventEndpointProductCreateSeatEventResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiSeatEventsArgs = {
  Authorization: string;
  "Sequence-Version"?: "2024-07-30" | undefined;
  body: CreateSeatEventEndpointCreateSeatEventRequestModel;
};

export const useCreateApiSeatEvents = (
  options: UseMutationOptions<
    CreateSeatEventEndpointProductCreateSeatEventResponseModel,
    Error,
    UseCreateApiSeatEventsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiSeatEventsArgs) =>
      apiFetch("/seat-events", createSeatEventEndpointProductCreateSeatEventResponseModel, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Seat Events"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
