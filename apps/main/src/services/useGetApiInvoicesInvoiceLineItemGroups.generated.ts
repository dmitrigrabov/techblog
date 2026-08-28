import {listLineItemGroupEndpointProductListLineItemGroupPaginatedResponseModel} from 'packages/models/src/listLineItemGroupEndpointProductListLineItemGroupPaginatedResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiInvoicesInvoiceLineItemGroupsArgs = {invoice: string, Authorization: string, before?: string | undefined, after?: string | undefined, limit?: number | undefined, sortOrder?: ('ASC' | 'DESC') | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiInvoicesInvoiceLineItemGroupsQueryOptions = (args: UseGetApiInvoicesInvoiceLineItemGroupsArgs) =>
      queryOptions({
        queryKey: ['GET /invoices/{invoice}/line-item-groups', 'Invoice Line Items', args.invoice, args.Authorization, args.before, args.after, args.limit, args.sortOrder, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/invoices/{invoice}/line-item-groups', { invoice: args.invoice, before: args.before, after: args.after, limit: args.limit, sortOrder: args.sortOrder }), listLineItemGroupEndpointProductListLineItemGroupPaginatedResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiInvoicesInvoiceLineItemGroups = (args: UseGetApiInvoicesInvoiceLineItemGroupsArgs) => useQuery(getApiInvoicesInvoiceLineItemGroupsQueryOptions(args));
