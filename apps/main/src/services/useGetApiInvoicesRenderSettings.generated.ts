import {getOrCreateInvoiceRenderSettingsEndpointProductCreateInvoiceRenderSettingsResponseModel} from 'packages/models/src/getOrCreateInvoiceRenderSettingsEndpointProductCreateInvoiceRenderSettingsResponseModel.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch} from '@/lib/api/client'

export type UseGetApiInvoicesRenderSettingsArgs = {Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiInvoicesRenderSettingsQueryOptions = (args: UseGetApiInvoicesRenderSettingsArgs) =>
      queryOptions({
        queryKey: ['GET /invoices/render-settings', 'Invoice Settings', args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch('/invoices/render-settings', getOrCreateInvoiceRenderSettingsEndpointProductCreateInvoiceRenderSettingsResponseModel, { method: 'GET' })
      });

export const useGetApiInvoicesRenderSettings = (args: UseGetApiInvoicesRenderSettingsArgs) => useQuery(getApiInvoicesRenderSettingsQueryOptions(args));
