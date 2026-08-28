import { creditNote, type CreditNote } from "packages/models/src/creditNote.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiCreditNotesIdVoidArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type CreateApiCreditNotesIdVoidBody = void;

export const useCreateApiCreditNotesIdVoid = (
  options: UseMutationOptions<CreditNote, Error, UseCreateApiCreditNotesIdVoidArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCreditNotesIdVoidArgs) =>
      apiFetch(buildUrl("/credit-notes/{id}/void", { id: args.id }), creditNote, {
        method: "POST",
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Credit Notes"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
