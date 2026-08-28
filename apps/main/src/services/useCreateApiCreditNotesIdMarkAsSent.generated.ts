import { creditNote, type CreditNote } from "packages/models/src/creditNote.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiCreditNotesIdMarkAsSentArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type CreateApiCreditNotesIdMarkAsSentBody = void;

export const useCreateApiCreditNotesIdMarkAsSent = (
  options: UseMutationOptions<
    CreditNote,
    Error,
    UseCreateApiCreditNotesIdMarkAsSentArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiCreditNotesIdMarkAsSentArgs) =>
      apiFetch(buildUrl("/credit-notes/{id}/mark-as-sent", { id: args.id }), creditNote, {
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
