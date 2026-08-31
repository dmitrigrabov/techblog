import {listCustomerSeatBalancesEndpointListCustomerSeatBalancesPaginatedResponseModel} from 'packages/models/src/listCustomerSeatBalancesEndpointListCustomerSeatBalancesPaginatedResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiSeatBalancesArgs = {Authorization: string, excludeZeroQuantity?: boolean | undefined, customerAliases?: string | undefined, customerIds?: string | undefined, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiSeatBalancesQueryOptions = (args: UseGetApiSeatBalancesArgs) =>
      queryOptions({
        queryKey: ['GET /seat-balances', 'Seat Metrics', args.Authorization, args.excludeZeroQuantity, args.customerAliases, args.customerIds, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/seat-balances', { excludeZeroQuantity: args.excludeZeroQuantity, customerAliases: args.customerAliases, customerIds: args.customerIds }), listCustomerSeatBalancesEndpointListCustomerSeatBalancesPaginatedResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiSeatBalances = (args: UseGetApiSeatBalancesArgs) => useQuery(getApiSeatBalancesQueryOptions(args));
