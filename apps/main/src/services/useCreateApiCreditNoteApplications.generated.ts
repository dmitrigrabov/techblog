import type { CreateCreditNoteApplicationEndpointCreateCreditNoteApplicationRequestModel } from "packages/models/src/createCreditNoteApplicationEndpointCreateCreditNoteApplicationRequestModel.generated.ts";
import { z } from "zod";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiCreditNoteApplicationsArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateCreditNoteApplicationEndpointCreateCreditNoteApplicationRequestModel;
};

export const useCreateApiCreditNoteApplicationsResponse = z.void();

export type UseCreateApiCreditNoteApplicationsResponse = void;

export const useCreateApiCreditNoteApplications = (
  options: UseMutationOptions<
    UseCreateApiCreditNoteApplicationsResponse,
    Error,
    UseCreateApiCreditNoteApplicationsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCreditNoteApplicationsArgs) =>
      apiFetch("/credit-note-applications", useCreateApiCreditNoteApplicationsResponse, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Credit Notes"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
