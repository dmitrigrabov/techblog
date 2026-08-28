import {getUsageMetricEndpointProductGetUsageMetricResponseModel} from 'packages/models/src/getUsageMetricEndpointProductGetUsageMetricResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiUsageMetricsIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiUsageMetricsIdQueryOptions = (args: UseGetApiUsageMetricsIdArgs) =>
      queryOptions({
        queryKey: ['GET /usage-metrics/{id}', 'Usage Metrics', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/usage-metrics/{id}', { id: args.id }), getUsageMetricEndpointProductGetUsageMetricResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiUsageMetricsId = (args: UseGetApiUsageMetricsIdArgs) => useQuery(getApiUsageMetricsIdQueryOptions(args));
