import {creditGrantsResponse} from 'packages/models/src/creditGrantsResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCreditsCustomerIdGrantsArgs = {customerId: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCreditsCustomerIdGrantsQueryOptions = (args: UseGetApiCreditsCustomerIdGrantsArgs) =>
      queryOptions({
        queryKey: ['GET /credits/{customerId}/grants', 'Credits', args.customerId, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/credits/{customerId}/grants', { customerId: args.customerId }), creditGrantsResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCreditsCustomerIdGrants = (args: UseGetApiCreditsCustomerIdGrantsArgs) => useQuery(getApiCreditsCustomerIdGrantsQueryOptions(args));
