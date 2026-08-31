import {getSeatMetricEndpointProductGetSeatMetricResponseModel} from 'packages/models/src/getSeatMetricEndpointProductGetSeatMetricResponseModel.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiSeatMetricsIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiSeatMetricsIdQueryOptions = (args: UseGetApiSeatMetricsIdArgs) =>
      queryOptions({
        queryKey: ['GET /seat-metrics/{id}', 'Seat Metrics', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/seat-metrics/{id}', { id: args.id }), getSeatMetricEndpointProductGetSeatMetricResponseModel, { method: 'GET' })
      });

export const useGetApiSeatMetricsId = (args: UseGetApiSeatMetricsIdArgs) => useQuery(getApiSeatMetricsIdQueryOptions(args));
