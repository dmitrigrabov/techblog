import {activityLogListResponse} from 'packages/models/src/activityLogListResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiActivityLogsArgs = {Authorization: string, before?: string | undefined, after?: string | undefined, limit?: number | undefined, sortOrder?: string | undefined, activityLogObjectId?: string | undefined, activityLogObjectEntityId?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiActivityLogsQueryOptions = (args: UseGetApiActivityLogsArgs) =>
      queryOptions({
        queryKey: ['GET /activity-logs', 'Activities', args.Authorization, args.before, args.after, args.limit, args.sortOrder, args.activityLogObjectId, args.activityLogObjectEntityId, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/activity-logs', { before: args.before, after: args.after, limit: args.limit, sortOrder: args.sortOrder, activityLogObjectId: args.activityLogObjectId, activityLogObjectEntityId: args.activityLogObjectEntityId }), activityLogListResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiActivityLogs = (args: UseGetApiActivityLogsArgs) => useQuery(getApiActivityLogsQueryOptions(args));
