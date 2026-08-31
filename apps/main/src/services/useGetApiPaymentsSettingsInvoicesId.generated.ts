import {getInvoiceSettingsEndpointProductGetInvoiceSettingsResponseModel} from 'packages/models/src/getInvoiceSettingsEndpointProductGetInvoiceSettingsResponseModel.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiPaymentsSettingsInvoicesIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiPaymentsSettingsInvoicesIdQueryOptions = (args: UseGetApiPaymentsSettingsInvoicesIdArgs) =>
      queryOptions({
        queryKey: ['GET /payments/settings/invoices/{id}', 'Invoices', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/payments/settings/invoices/{id}', { id: args.id }), getInvoiceSettingsEndpointProductGetInvoiceSettingsResponseModel, { method: 'GET' })
      });

export const useGetApiPaymentsSettingsInvoicesId = (args: UseGetApiPaymentsSettingsInvoicesIdArgs) => useQuery(getApiPaymentsSettingsInvoicesIdQueryOptions(args));
