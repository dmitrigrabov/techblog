import {getByInvoiceIdProductGetInvoiceSettingsResponseModel} from 'packages/models/src/getByInvoiceIdProductGetInvoiceSettingsResponseModel.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiPaymentsSettingsInvoicesForInvoiceIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiPaymentsSettingsInvoicesForInvoiceIdQueryOptions = (args: UseGetApiPaymentsSettingsInvoicesForInvoiceIdArgs) =>
      queryOptions({
        queryKey: ['GET /payments/settings/invoices/for-invoice/{id}', 'Invoices', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/payments/settings/invoices/for-invoice/{id}', { id: args.id }), getByInvoiceIdProductGetInvoiceSettingsResponseModel, { method: 'GET' })
      });

export const useGetApiPaymentsSettingsInvoicesForInvoiceId = (args: UseGetApiPaymentsSettingsInvoicesForInvoiceIdArgs) => useQuery(getApiPaymentsSettingsInvoicesForInvoiceIdQueryOptions(args));
