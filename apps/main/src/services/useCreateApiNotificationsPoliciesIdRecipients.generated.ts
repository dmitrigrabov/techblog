import type { AddRecipientsToPolicyRequest } from "packages/models/src/addRecipientsToPolicyRequest.generated.ts";
import {
  notificationPolicy,
  type NotificationPolicy,
} from "packages/models/src/notificationPolicy.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiNotificationsPoliciesIdRecipientsArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: AddRecipientsToPolicyRequest;
};

export const useCreateApiNotificationsPoliciesIdRecipients = (
  options: UseMutationOptions<
    NotificationPolicy,
    Error,
    UseCreateApiNotificationsPoliciesIdRecipientsArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiNotificationsPoliciesIdRecipientsArgs) =>
      apiFetch(
        buildUrl("/notifications/policies/{id}/recipients", { id: args.id }),
        notificationPolicy,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(args.body),
        },
      ),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Notification Policies"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
