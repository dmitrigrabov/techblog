import { creditNote, type CreditNote } from "packages/models/src/creditNote.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiCreditNotesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiCreditNotesIdBody = void;

export const useDeleteApiCreditNotesId = (
  options: UseMutationOptions<CreditNote, Error, UseDeleteApiCreditNotesIdArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiCreditNotesIdArgs) =>
      apiFetch(buildUrl("/credit-notes/{id}", { id: args.id }), creditNote, { method: "DELETE" }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Credit Notes"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
