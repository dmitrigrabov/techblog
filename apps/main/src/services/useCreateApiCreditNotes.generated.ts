import type { CreateCreditNoteEndpointCreateCreditNoteRequestModel } from "packages/models/src/createCreditNoteEndpointCreateCreditNoteRequestModel.generated.ts";
import { creditNote, type CreditNote } from "packages/models/src/creditNote.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiCreditNotesArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateCreditNoteEndpointCreateCreditNoteRequestModel;
};

export const useCreateApiCreditNotes = (
  options: UseMutationOptions<CreditNote, Error, UseCreateApiCreditNotesArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCreditNotesArgs) =>
      apiFetch("/credit-notes", creditNote, {
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
