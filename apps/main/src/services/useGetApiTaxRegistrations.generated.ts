import {productListTaxRegistrationPaginatedResponseModel} from 'packages/models/src/productListTaxRegistrationPaginatedResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiTaxRegistrationsArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiTaxRegistrationsQueryOptions = (args: UseGetApiTaxRegistrationsArgs) =>
      queryOptions({
        queryKey: ['GET /tax-registrations', 'Tax Registrations', args.Authorization, args.limit, args.after, args.before, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/tax-registrations', { limit: args.limit, after: args.after, before: args.before }), productListTaxRegistrationPaginatedResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiTaxRegistrations = (args: UseGetApiTaxRegistrationsArgs) => useQuery(getApiTaxRegistrationsQueryOptions(args));
