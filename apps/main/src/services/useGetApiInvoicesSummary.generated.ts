import {invoiceSummaryResponse} from 'packages/models/src/invoiceSummaryResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiInvoicesSummaryArgs = {Authorization: string, invoiceStatus?: string | undefined, invoicePaymentStatus?: string | undefined, customerId?: string | undefined, billingScheduleId?: string | undefined, dueBefore?: string | undefined, dueAfter?: string | undefined, sentBefore?: string | undefined, sentAfter?: string | undefined, invoiceBefore?: string | undefined, invoiceAfter?: string | undefined, excludeZeroQuantity?: boolean | undefined, invoiceCurrency?: string | undefined, search?: string | undefined, invoiceNumber?: string | undefined, netTotal?: number | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiInvoicesSummaryQueryOptions = (args: UseGetApiInvoicesSummaryArgs) =>
      queryOptions({
        queryKey: ['GET /invoices/summary', 'Invoices', args.Authorization, args.invoiceStatus, args.invoicePaymentStatus, args.customerId, args.billingScheduleId, args.dueBefore, args.dueAfter, args.sentBefore, args.sentAfter, args.invoiceBefore, args.invoiceAfter, args.excludeZeroQuantity, args.invoiceCurrency, args.search, args.invoiceNumber, args.netTotal, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/invoices/summary', { invoiceStatus: args.invoiceStatus, invoicePaymentStatus: args.invoicePaymentStatus, customerId: args.customerId, billingScheduleId: args.billingScheduleId, dueBefore: args.dueBefore, dueAfter: args.dueAfter, sentBefore: args.sentBefore, sentAfter: args.sentAfter, invoiceBefore: args.invoiceBefore, invoiceAfter: args.invoiceAfter, excludeZeroQuantity: args.excludeZeroQuantity, invoiceCurrency: args.invoiceCurrency, search: args.search, invoiceNumber: args.invoiceNumber, netTotal: args.netTotal }), invoiceSummaryResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiInvoicesSummary = (args: UseGetApiInvoicesSummaryArgs) => useQuery(getApiInvoicesSummaryQueryOptions(args));
