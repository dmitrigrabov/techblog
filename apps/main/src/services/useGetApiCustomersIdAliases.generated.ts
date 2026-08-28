import {getCustomerAliasesResponse} from 'packages/models/src/getCustomerAliasesResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCustomersIdAliasesArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCustomersIdAliasesQueryOptions = (args: UseGetApiCustomersIdAliasesArgs) =>
      queryOptions({
        queryKey: ['GET /customers/{id}/aliases', 'Customer Aliases', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/customers/{id}/aliases', { id: args.id }), getCustomerAliasesResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCustomersIdAliases = (args: UseGetApiCustomersIdAliasesArgs) => useQuery(getApiCustomersIdAliasesQueryOptions(args));
