import {listCustomerAliasPaginatedResponseModel} from 'packages/models/src/listCustomerAliasPaginatedResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCustomerAliasesArgs = {Authorization: string, value?: string | undefined, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCustomerAliasesQueryOptions = (args: UseGetApiCustomerAliasesArgs) =>
      queryOptions({
        queryKey: ['GET /customer-aliases', 'Customer Aliases', args.Authorization, args.value, args.limit, args.after, args.before, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/customer-aliases', { value: args.value, limit: args.limit, after: args.after, before: args.before }), listCustomerAliasPaginatedResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCustomerAliases = (args: UseGetApiCustomerAliasesArgs) => useQuery(getApiCustomerAliasesQueryOptions(args));
