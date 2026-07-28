import {getTaxRegistrationForCustomerProductResponse} from 'packages/models/src/getTaxRegistrationForCustomerProductResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiTaxRegistrationsForCustomerIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiTaxRegistrationsForCustomerIdQueryOptions = (args: UseGetApiTaxRegistrationsForCustomerIdArgs) =>
      queryOptions({
        queryKey: ['GET /tax-registrations/for-customer/{id}', 'Tax Registrations', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/tax-registrations/for-customer/{id}', { id: args.id }), getTaxRegistrationForCustomerProductResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiTaxRegistrationsForCustomerId = (args: UseGetApiTaxRegistrationsForCustomerIdArgs) => useQuery(getApiTaxRegistrationsForCustomerIdQueryOptions(args));
