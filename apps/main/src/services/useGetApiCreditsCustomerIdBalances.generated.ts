import {creditBalancesReply} from 'packages/models/src/creditBalancesReply.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCreditsCustomerIdBalancesArgs = {customerId: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCreditsCustomerIdBalancesQueryOptions = (args: UseGetApiCreditsCustomerIdBalancesArgs) =>
      queryOptions({
        queryKey: ['GET /credits/{customerId}/balances', 'Credits', args.customerId, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/credits/{customerId}/balances', { customerId: args.customerId }), creditBalancesReply, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCreditsCustomerIdBalances = (args: UseGetApiCreditsCustomerIdBalancesArgs) => useQuery(getApiCreditsCustomerIdBalancesQueryOptions(args));
