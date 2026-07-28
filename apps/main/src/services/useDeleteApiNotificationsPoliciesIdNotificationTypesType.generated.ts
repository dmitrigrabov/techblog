import {
  notificationPolicy,
  type NotificationPolicy,
} from "packages/models/src/notificationPolicy.generated.ts";
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch, buildUrl } from "@/lib/api/client";

export type UseDeleteApiNotificationsPoliciesIdNotificationTypesTypeArgs = {
  id: string;
  type:
    | "CUSTOMER_CREATED"
    | "CUSTOMER_UPDATED"
    | "CUSTOMER_ARCHIVED"
    | "INVOICE_CREATED"
    | "INVOICE_ISSUED"
    | "INVOICE_UPDATED"
    | "INTEGRATION_SYNC_COMPLETED"
    | "INTEGRATION_WEBHOOK_HANDLED"
    | "MERCHANT_UPDATED"
    | "BILLING_SCHEDULE_CREATED"
    | "BILLING_SCHEDULE_UPDATED"
    | "BILLING_SCHEDULE_ARCHIVED"
    | "CREDIT_NOTE_CREATED"
    | "CREDIT_NOTE_UPDATED"
    | "CREDIT_NOTE_ISSUED"
    | "QUOTE_PUBLISHED"
    | "QUOTE_ACCEPTED"
    | "QUOTE_SIGNED"
    | "INVOICE_REMINDER_SENT"
    | "WATCHTOWER_TASK_ASSIGNED";
  Authorization: string;
  "sequence-version"?: "2024-07-30" | undefined;
};

export type DeleteApiNotificationsPoliciesIdNotificationTypesTypeBody = void;

export const useDeleteApiNotificationsPoliciesIdNotificationTypesType = (
  options: UseMutationOptions<
    NotificationPolicy,
    Error,
    UseDeleteApiNotificationsPoliciesIdNotificationTypesTypeArgs,
    unknown
  > = {},
) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...rest } = options;

  return useMutation({
    mutationFn: (args: UseDeleteApiNotificationsPoliciesIdNotificationTypesTypeArgs) =>
      apiFetch(
        buildUrl("/notifications/policies/{id}/notification-types/{type}", {
          id: args.id,
          type: args.type,
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
