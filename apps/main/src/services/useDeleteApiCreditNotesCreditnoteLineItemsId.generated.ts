import {
  deleteCreditNoteLineItemEndpointProductDeleteCreditNoteLineItemResponseModel,
  type DeleteCreditNoteLineItemEndpointProductDeleteCreditNoteLineItemResponseModel,
} from "packages/models/src/deleteCreditNoteLineItemEndpointProductDeleteCreditNoteLineItemResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiCreditNotesCreditnoteLineItemsIdArgs = {
  creditnote: string;
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiCreditNotesCreditnoteLineItemsIdBody = void;

export const useDeleteApiCreditNotesCreditnoteLineItemsId = (
  options: UseMutationOptions<
    DeleteCreditNoteLineItemEndpointProductDeleteCreditNoteLineItemResponseModel,
    Error,
    UseDeleteApiCreditNotesCreditnoteLineItemsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiCreditNotesCreditnoteLineItemsIdArgs) =>
      apiFetch(
        buildUrl("/credit-notes/{creditnote}/line-items/{id}", {
          creditnote: args.creditnote,
          id: args.id,
        }),
        deleteCreditNoteLineItemEndpointProductDeleteCreditNoteLineItemResponseModel,
        { method: "DELETE" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Credit Note Line Items"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
