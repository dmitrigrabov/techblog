import type { AddNotificationTypesToPolicyRequest } from "packages/models/src/addNotificationTypesToPolicyRequest.generated.ts";
import {
  notificationPolicy,
  type NotificationPolicy,
} from "packages/models/src/notificationPolicy.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseCreateApiNotificationsPoliciesIdNotificationTypesArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: AddNotificationTypesToPolicyRequest;
};

export const useCreateApiNotificationsPoliciesIdNotificationTypes = (
  options: UseMutationOptions<
    NotificationPolicy,
    Error,
    UseCreateApiNotificationsPoliciesIdNotificationTypesArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiNotificationsPoliciesIdNotificationTypesArgs) =>
      apiFetch(
        buildUrl("/notifications/policies/{id}/notification-types", { id: args.id }),
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
