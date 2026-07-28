import {activityLogResponse} from 'packages/models/src/activityLogResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiActivityLogsIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiActivityLogsIdQueryOptions = (args: UseGetApiActivityLogsIdArgs) =>
      queryOptions({
        queryKey: ['GET /activity-logs/{id}', 'Activities', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/activity-logs/{id}', { id: args.id }), activityLogResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiActivityLogsId = (args: UseGetApiActivityLogsIdArgs) => useQuery(getApiActivityLogsIdQueryOptions(args));
