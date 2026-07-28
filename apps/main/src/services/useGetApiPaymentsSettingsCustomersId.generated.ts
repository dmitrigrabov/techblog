import {getCustomerSettingsEndpointProductGetCustomerSettingsResponseModel} from 'packages/models/src/getCustomerSettingsEndpointProductGetCustomerSettingsResponseModel.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiPaymentsSettingsCustomersIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiPaymentsSettingsCustomersIdQueryOptions = (args: UseGetApiPaymentsSettingsCustomersIdArgs) =>
      queryOptions({
        queryKey: ['GET /payments/settings/customers/{id}', 'Customers', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/payments/settings/customers/{id}', { id: args.id }), getCustomerSettingsEndpointProductGetCustomerSettingsResponseModel, { method: 'GET' })
      });

export const useGetApiPaymentsSettingsCustomersId = (args: UseGetApiPaymentsSettingsCustomersIdArgs) => useQuery(getApiPaymentsSettingsCustomersIdQueryOptions(args));
