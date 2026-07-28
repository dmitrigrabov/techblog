import {listCreditGrantsResponse} from 'packages/models/src/listCreditGrantsResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCreditsArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCreditsQueryOptions = (args: UseGetApiCreditsArgs) =>
      queryOptions({
        queryKey: ['GET /credits', 'Credits', args.Authorization, args.limit, args.after, args.before, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/credits', { limit: args.limit, after: args.after, before: args.before }), listCreditGrantsResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCredits = (args: UseGetApiCreditsArgs) => useQuery(getApiCreditsQueryOptions(args));
