import {getQuoteViewTrackingResponse} from 'packages/models/src/getQuoteViewTrackingResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiQuotesIdAnalyticsArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiQuotesIdAnalyticsQueryOptions = (args: UseGetApiQuotesIdAnalyticsArgs) =>
      queryOptions({
        queryKey: ['GET /quotes/{id}/analytics', 'Quotes', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/quotes/{id}/analytics', { id: args.id }), getQuoteViewTrackingResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiQuotesIdAnalytics = (args: UseGetApiQuotesIdAnalyticsArgs) => useQuery(getApiQuotesIdAnalyticsQueryOptions(args));
