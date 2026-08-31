import type { Stable20240101CreateCreditNoteLineItemRequestModel } from "packages/models/src/stable20240101CreateCreditNoteLineItemRequestModel.generated.ts";
import {
  stable20240101ProductCreateCreditNoteLineItemResponseModel,
  type Stable20240101ProductCreateCreditNoteLineItemResponseModel,
} from "packages/models/src/stable20240101ProductCreateCreditNoteLineItemResponseModel.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiCreditNotesCreditnoteLineItemsArgs = {
  creditnote: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: Stable20240101CreateCreditNoteLineItemRequestModel;
};

export const useCreateApiCreditNotesCreditnoteLineItems = (
  options: UseMutationOptions<
    Stable20240101ProductCreateCreditNoteLineItemResponseModel,
    Error,
    UseCreateApiCreditNotesCreditnoteLineItemsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCreditNotesCreditnoteLineItemsArgs) =>
      apiFetch(
        buildUrl("/credit-notes/{creditnote}/line-items", { creditnote: args.creditnote }),
        stable20240101ProductCreateCreditNoteLineItemResponseModel,
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
