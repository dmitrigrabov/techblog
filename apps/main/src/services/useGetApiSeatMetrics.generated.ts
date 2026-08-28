import {listSeatMetricEndpointProductListSeatMetricPaginatedResponseModel} from 'packages/models/src/listSeatMetricEndpointProductListSeatMetricPaginatedResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiSeatMetricsArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiSeatMetricsQueryOptions = (args: UseGetApiSeatMetricsArgs) =>
      queryOptions({
        queryKey: ['GET /seat-metrics', 'Seat Metrics', args.Authorization, args.limit, args.after, args.before, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/seat-metrics', { limit: args.limit, after: args.after, before: args.before }), listSeatMetricEndpointProductListSeatMetricPaginatedResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiSeatMetrics = (args: UseGetApiSeatMetricsArgs) => useQuery(getApiSeatMetricsQueryOptions(args));
