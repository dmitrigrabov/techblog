import type { CreateCreditNoteLineItemGroupEndpointCreateCreditNoteLineItemGroupRequestModel } from "packages/models/src/createCreditNoteLineItemGroupEndpointCreateCreditNoteLineItemGroupRequestModel.generated.ts";
import {
  createCreditNoteLineItemGroupEndpointProductCreateCreditNoteLineItemGroupResponseModel,
  type CreateCreditNoteLineItemGroupEndpointProductCreateCreditNoteLineItemGroupResponseModel,
} from "packages/models/src/createCreditNoteLineItemGroupEndpointProductCreateCreditNoteLineItemGroupResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiCreditNotesCreditnoteLineItemGroupsArgs = {
  creditnote: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateCreditNoteLineItemGroupEndpointCreateCreditNoteLineItemGroupRequestModel;
};

export const useCreateApiCreditNotesCreditnoteLineItemGroups = (
  options: UseMutationOptions<
    CreateCreditNoteLineItemGroupEndpointProductCreateCreditNoteLineItemGroupResponseModel,
    Error,
    UseCreateApiCreditNotesCreditnoteLineItemGroupsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCreditNotesCreditnoteLineItemGroupsArgs) =>
      apiFetch(
        buildUrl("/credit-notes/{creditnote}/line-item-groups", { creditnote: args.creditnote }),
        createCreditNoteLineItemGroupEndpointProductCreateCreditNoteLineItemGroupResponseModel,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Credit Note Line Items"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
