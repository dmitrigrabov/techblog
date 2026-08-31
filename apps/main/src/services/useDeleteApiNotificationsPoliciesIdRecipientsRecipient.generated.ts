import {
  notificationPolicy,
  type NotificationPolicy,
} from "packages/models/src/notificationPolicy.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiNotificationsPoliciesIdRecipientsRecipientArgs = {
  id: string;
  recipient: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiNotificationsPoliciesIdRecipientsRecipientBody = void;

export const useDeleteApiNotificationsPoliciesIdRecipientsRecipient = (
  options: UseMutationOptions<
    NotificationPolicy,
    Error,
    UseDeleteApiNotificationsPoliciesIdRecipientsRecipientArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiNotificationsPoliciesIdRecipientsRecipientArgs) =>
      apiFetch(
        buildUrl("/notifications/policies/{id}/recipients/{recipient}", {
          id: args.id,
          recipient: args.recipient,
        }),
        notificationPolicy,
        { method: "DELETE" },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Notification Policies"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
