import type { CreateNotificationPolicyRequest } from "packages/models/src/createNotificationPolicyRequest.generated.ts";
import {
  notificationPolicy,
  type NotificationPolicy,
} from "packages/models/src/notificationPolicy.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";

export type UseCreateApiNotificationsPoliciesArgs = {
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
  body: CreateNotificationPolicyRequest;
};

export const useCreateApiNotificationsPolicies = (
  options: UseMutationOptions<
    NotificationPolicy,
    Error,
    UseCreateApiNotificationsPoliciesArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseCreateApiNotificationsPoliciesArgs) =>
      apiFetch("/notifications/policies", notificationPolicy, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(args.body),
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Notification Policies"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
