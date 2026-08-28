import {listLineItemEndpointPaginatedLineItemResponseModel} from 'packages/models/src/listLineItemEndpointPaginatedLineItemResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiInvoicesInvoiceLineItemsArgs = {invoice: string, Authorization: string, before?: string | undefined, after?: string | undefined, limit?: number | undefined, sortOrder?: ('ASC' | 'DESC') | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiInvoicesInvoiceLineItemsQueryOptions = (args: UseGetApiInvoicesInvoiceLineItemsArgs) =>
      queryOptions({
        queryKey: ['GET /invoices/{invoice}/line-items', 'Invoice Line Items', args.invoice, args.Authorization, args.before, args.after, args.limit, args.sortOrder, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/invoices/{invoice}/line-items', { invoice: args.invoice, before: args.before, after: args.after, limit: args.limit, sortOrder: args.sortOrder }), listLineItemEndpointPaginatedLineItemResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiInvoicesInvoiceLineItems = (args: UseGetApiInvoicesInvoiceLineItemsArgs) => useQuery(getApiInvoicesInvoiceLineItemsQueryOptions(args));
