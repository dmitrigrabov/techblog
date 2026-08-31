import {notificationPolicy} from 'packages/models/src/notificationPolicy.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiNotificationsPoliciesIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiNotificationsPoliciesIdQueryOptions = (args: UseGetApiNotificationsPoliciesIdArgs) =>
      queryOptions({
        queryKey: ['GET /notifications/policies/{id}', 'Notification Policies', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/notifications/policies/{id}', { id: args.id }), notificationPolicy, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiNotificationsPoliciesId = (args: UseGetApiNotificationsPoliciesIdArgs) => useQuery(getApiNotificationsPoliciesIdQueryOptions(args));
