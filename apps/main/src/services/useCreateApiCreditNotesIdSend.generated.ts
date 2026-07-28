import { creditNote, type CreditNote } from "packages/models/src/creditNote.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiCreditNotesIdSendArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type CreateApiCreditNotesIdSendBody = void;

export const useCreateApiCreditNotesIdSend = (
  options: UseMutationOptions<CreditNote, Error, UseCreateApiCreditNotesIdSendArgs, unknown> = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCreditNotesIdSendArgs) =>
      apiFetch(buildUrl("/credit-notes/{id}/send", { id: args.id }), creditNote, {
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
