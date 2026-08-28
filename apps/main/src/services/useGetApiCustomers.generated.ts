import {listCustomerResponse} from 'packages/models/src/listCustomerResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCustomersArgs = {Authorization: string, sortBy?: string | undefined, legalName?: string | undefined, email?: string | undefined, alias?: string | undefined, label?: string | undefined, includeArchived?: boolean | undefined, billingStatus?: ('ACTIVE' | 'INACTIVE') | undefined, limit?: number | undefined, after?: string | undefined, before?: string | undefined, sortOrder?: ('ASC' | 'DESC') | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCustomersQueryOptions = (args: UseGetApiCustomersArgs) =>
      queryOptions({
        queryKey: ['GET /customers', 'Customers', args.Authorization, args.sortBy, args.legalName, args.email, args.alias, args.label, args.includeArchived, args.billingStatus, args.limit, args.after, args.before, args.sortOrder, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/customers', { sortBy: args.sortBy, legalName: args.legalName, email: args.email, alias: args.alias, label: args.label, includeArchived: args.includeArchived, billingStatus: args.billingStatus, limit: args.limit, after: args.after, before: args.before, sortOrder: args.sortOrder }), listCustomerResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCustomers = (args: UseGetApiCustomersArgs) => useQuery(getApiCustomersQueryOptions(args));
