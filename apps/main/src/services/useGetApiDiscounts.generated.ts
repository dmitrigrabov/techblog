import {listDiscountsResponse} from 'packages/models/src/listDiscountsResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiDiscountsArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiDiscountsQueryOptions = (args: UseGetApiDiscountsArgs) =>
      queryOptions({
        queryKey: ['GET /discounts', 'Discounts', args.Authorization, args.limit, args.after, args.before, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/discounts', { limit: args.limit, after: args.after, before: args.before }), listDiscountsResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiDiscounts = (args: UseGetApiDiscountsArgs) => useQuery(getApiDiscountsQueryOptions(args));
