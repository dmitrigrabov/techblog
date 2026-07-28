import {listTaxRegistrationEndpointProductListTaxRegistrationPaginatedResponseModel} from 'packages/models/src/listTaxRegistrationEndpointProductListTaxRegistrationPaginatedResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiTaxRegistrationsArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiTaxRegistrationsQueryOptions = (args: UseGetApiTaxRegistrationsArgs) =>
      queryOptions({
        queryKey: ['GET /tax-registrations', 'Tax Registrations', args.Authorization, args.limit, args.after, args.before, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/tax-registrations', { limit: args.limit, after: args.after, before: args.before }), listTaxRegistrationEndpointProductListTaxRegistrationPaginatedResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiTaxRegistrations = (args: UseGetApiTaxRegistrationsArgs) => useQuery(getApiTaxRegistrationsQueryOptions(args));
