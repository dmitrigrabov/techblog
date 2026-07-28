import type { UpdateCreditNoteLineItemGroupEndpointUpdateCreditNoteLineItemGroupRequestModel } from "packages/models/src/updateCreditNoteLineItemGroupEndpointUpdateCreditNoteLineItemGroupRequestModel.generated.ts";
import {
  updateCreditNoteLineItemGroupEndpointProductUpdateCreditNoteLineItemGroupResponseModel,
  type UpdateCreditNoteLineItemGroupEndpointProductUpdateCreditNoteLineItemGroupResponseModel,
} from "packages/models/src/updateCreditNoteLineItemGroupEndpointProductUpdateCreditNoteLineItemGroupResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiCreditNotesCreditnoteLineItemGroupsIdArgs = {
  creditnote: string;
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateCreditNoteLineItemGroupEndpointUpdateCreditNoteLineItemGroupRequestModel;
};

export const useUpdateApiCreditNotesCreditnoteLineItemGroupsId = (
  options: UseMutationOptions<
    UpdateCreditNoteLineItemGroupEndpointProductUpdateCreditNoteLineItemGroupResponseModel,
    Error,
    UseUpdateApiCreditNotesCreditnoteLineItemGroupsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiCreditNotesCreditnoteLineItemGroupsIdArgs) =>
      apiFetch(
        buildUrl("/credit-notes/{creditnote}/line-item-groups/{id}", {
          creditnote: args.creditnote,
          id: args.id,
        }),
        updateCreditNoteLineItemGroupEndpointProductUpdateCreditNoteLineItemGroupResponseModel,
        {
          method: "PUT",
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
