import {notificationPolicies} from 'packages/models/src/notificationPolicies.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiNotificationsPoliciesArgs = {Authorization: string, notificationType?: ('CUSTOMER_CREATED' | 'CUSTOMER_UPDATED' | 'CUSTOMER_ARCHIVED' | 'INVOICE_CREATED' | 'INVOICE_ISSUED' | 'INVOICE_UPDATED' | 'INTEGRATION_SYNC_COMPLETED' | 'INTEGRATION_WEBHOOK_HANDLED' | 'MERCHANT_UPDATED' | 'BILLING_SCHEDULE_CREATED' | 'BILLING_SCHEDULE_UPDATED' | 'BILLING_SCHEDULE_ARCHIVED' | 'CREDIT_NOTE_CREATED' | 'CREDIT_NOTE_UPDATED' | 'CREDIT_NOTE_ISSUED' | 'QUOTE_PUBLISHED' | 'QUOTE_ACCEPTED' | 'QUOTE_SIGNED' | 'INVOICE_REMINDER_SENT' | 'WATCHTOWER_TASK_ASSIGNED') | undefined, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiNotificationsPoliciesQueryOptions = (args: UseGetApiNotificationsPoliciesArgs) =>
      queryOptions({
        queryKey: ['GET /notifications/policies', 'Notification Policies', args.Authorization, args.notificationType, args.limit, args.after, args.before, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/notifications/policies', { notificationType: args.notificationType, limit: args.limit, after: args.after, before: args.before }), notificationPolicies, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiNotificationsPolicies = (args: UseGetApiNotificationsPoliciesArgs) => useQuery(getApiNotificationsPoliciesQueryOptions(args));
