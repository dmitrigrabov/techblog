import {
  notificationPolicy,
  type NotificationPolicy,
} from "packages/models/src/notificationPolicy.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiNotificationsPoliciesIdArgs = {
  id: string;
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiNotificationsPoliciesIdBody = void;

export const useDeleteApiNotificationsPoliciesId = (
  options: UseMutationOptions<
    NotificationPolicy,
    Error,
    UseDeleteApiNotificationsPoliciesIdArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiNotificationsPoliciesIdArgs) =>
      apiFetch(buildUrl("/notifications/policies/{id}", { id: args.id }), notificationPolicy, {
        method: "DELETE",
      }),
    onSuccess: (data, variables, onMutateResult, context) => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ["Notification Policies"] });

      onSuccess?.(data, variables, onMutateResult, context);
    },
    ...rest,
  });
};
