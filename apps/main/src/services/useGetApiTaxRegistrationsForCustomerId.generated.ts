import {customerTaxRegistrationsResponse} from 'packages/models/src/customerTaxRegistrationsResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiTaxRegistrationsForCustomerIdArgs = {id: string, Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiTaxRegistrationsForCustomerIdQueryOptions = (args: UseGetApiTaxRegistrationsForCustomerIdArgs) =>
      queryOptions({
        queryKey: ['GET /tax-registrations/for-customer/{id}', 'Tax Registrations', args.id, args.Authorization, args.limit, args.after, args.before, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/tax-registrations/for-customer/{id}', { id: args.id, limit: args.limit, after: args.after, before: args.before }), customerTaxRegistrationsResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiTaxRegistrationsForCustomerId = (args: UseGetApiTaxRegistrationsForCustomerIdArgs) => useQuery(getApiTaxRegistrationsForCustomerIdQueryOptions(args));
