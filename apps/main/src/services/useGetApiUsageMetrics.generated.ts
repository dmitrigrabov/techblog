import {listUsageMetricEndpointProductResponseModel} from 'packages/models/src/listUsageMetricEndpointProductResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiUsageMetricsArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, name?: string | undefined, id?: string | undefined, eventType?: string | undefined, eventProperty?: string | undefined, aggregationType?: string | undefined, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiUsageMetricsQueryOptions = (args: UseGetApiUsageMetricsArgs) =>
      queryOptions({
        queryKey: ['GET /usage-metrics', 'Usage Metrics', args.Authorization, args.limit, args.after, args.before, args.name, args.id, args.eventType, args.eventProperty, args.aggregationType, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/usage-metrics', { limit: args.limit, after: args.after, before: args.before, name: args.name, id: args.id, eventType: args.eventType, eventProperty: args.eventProperty, aggregationType: args.aggregationType }), listUsageMetricEndpointProductResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiUsageMetrics = (args: UseGetApiUsageMetricsArgs) => useQuery(getApiUsageMetricsQueryOptions(args));
