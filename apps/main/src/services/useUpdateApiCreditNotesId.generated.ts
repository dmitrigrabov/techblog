import type { UpdateCreditNoteEndpointUpdateCreditNoteRequestModel } from "packages/models/src/updateCreditNoteEndpointUpdateCreditNoteRequestModel.generated.ts";
import { creditNote, type CreditNote } from "packages/models/src/creditNote.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseUpdateApiCreditNotesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: UpdateCreditNoteEndpointUpdateCreditNoteRequestModel;
};

export const useUpdateApiCreditNotesId = (
  options: UseMutationOptions<CreditNote, Error, UseUpdateApiCreditNotesIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseUpdateApiCreditNotesIdArgs) =>
      apiFetch(buildUrl("/credit-notes/{id}", { id: args.id }), creditNote, {
        method: "PUT",
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
