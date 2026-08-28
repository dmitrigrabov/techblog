import {invoiceResponse} from 'packages/models/src/invoiceResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiInvoicesIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiInvoicesIdQueryOptions = (args: UseGetApiInvoicesIdArgs) =>
      queryOptions({
        queryKey: ['GET /invoices/{id}', 'Invoices', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/invoices/{id}', { id: args.id }), invoiceResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiInvoicesId = (args: UseGetApiInvoicesIdArgs) => useQuery(getApiInvoicesIdQueryOptions(args));
