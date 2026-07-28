import type { UpdateCreditNoteLineItemEndpointUpdateCreditNoteLineItemRequestModel } from "packages/models/src/updateCreditNoteLineItemEndpointUpdateCreditNoteLineItemRequestModel.generated.ts";
import {
  updateCreditNoteLineItemEndpointProductUpdateCreditNoteLineItemResponseModel,
  type UpdateCreditNoteLineItemEndpointProductUpdateCreditNoteLineItemResponseModel,
} from "packages/models/src/updateCreditNoteLineItemEndpointProductUpdateCreditNoteLineItemResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiCreditNotesCreditnoteLineItemsIdArgs = {
  creditnote: string;
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateCreditNoteLineItemEndpointUpdateCreditNoteLineItemRequestModel;
};

export const useUpdateApiCreditNotesCreditnoteLineItemsId = (
  options: UseMutationOptions<
    UpdateCreditNoteLineItemEndpointProductUpdateCreditNoteLineItemResponseModel,
    Error,
    UseUpdateApiCreditNotesCreditnoteLineItemsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiCreditNotesCreditnoteLineItemsIdArgs) =>
      apiFetch(
        buildUrl("/credit-notes/{creditnote}/line-items/{id}", {
          creditnote: args.creditnote,
          id: args.id,
        }),
        updateCreditNoteLineItemEndpointProductUpdateCreditNoteLineItemResponseModel,
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
