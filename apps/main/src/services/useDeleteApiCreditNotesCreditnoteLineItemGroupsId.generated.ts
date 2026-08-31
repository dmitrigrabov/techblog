import {
  deleteCreditNoteLineItemGroupEndpointProductDeleteCreditNoteLineItemGroupResponseModel,
  type DeleteCreditNoteLineItemGroupEndpointProductDeleteCreditNoteLineItemGroupResponseModel,
} from "packages/models/src/deleteCreditNoteLineItemGroupEndpointProductDeleteCreditNoteLineItemGroupResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiCreditNotesCreditnoteLineItemGroupsIdArgs = {
  creditnote: string;
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiCreditNotesCreditnoteLineItemGroupsIdBody = void;

export const useDeleteApiCreditNotesCreditnoteLineItemGroupsId = (
  options: UseMutationOptions<
    DeleteCreditNoteLineItemGroupEndpointProductDeleteCreditNoteLineItemGroupResponseModel,
    Error,
    UseDeleteApiCreditNotesCreditnoteLineItemGroupsIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiCreditNotesCreditnoteLineItemGroupsIdArgs) =>
      apiFetch(
        buildUrl("/credit-notes/{creditnote}/line-item-groups/{id}", {
          creditnote: args.creditnote,
          id: args.id,
        }),
        deleteCreditNoteLineItemGroupEndpointProductDeleteCreditNoteLineItemGroupResponseModel,
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
