import {invoiceCurrencyConversionsListResponse} from 'packages/models/src/invoiceCurrencyConversionsListResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiInvoicesIdCurrencyConversionsArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiInvoicesIdCurrencyConversionsQueryOptions = (args: UseGetApiInvoicesIdCurrencyConversionsArgs) =>
      queryOptions({
        queryKey: ['GET /invoices/{id}/currency-conversions', 'Invoices', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/invoices/{id}/currency-conversions', { id: args.id }), invoiceCurrencyConversionsListResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiInvoicesIdCurrencyConversions = (args: UseGetApiInvoicesIdCurrencyConversionsArgs) => useQuery(getApiInvoicesIdCurrencyConversionsQueryOptions(args));
