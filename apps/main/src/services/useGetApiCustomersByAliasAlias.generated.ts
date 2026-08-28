import {customer20240509} from 'packages/models/src/customer20240509.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCustomersByAliasAliasArgs = {alias: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCustomersByAliasAliasQueryOptions = (args: UseGetApiCustomersByAliasAliasArgs) =>
      queryOptions({
        queryKey: ['GET /customers/by-alias/{alias}', 'Customer Aliases', args.alias, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/customers/by-alias/{alias}', { alias: args.alias }), customer20240509, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCustomersByAliasAlias = (args: UseGetApiCustomersByAliasAliasArgs) => useQuery(getApiCustomersByAliasAliasQueryOptions(args));
