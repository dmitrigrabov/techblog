import {getTaxRegistrationForMerchantProductResponse} from 'packages/models/src/getTaxRegistrationForMerchantProductResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiTaxRegistrationsForMerchantIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiTaxRegistrationsForMerchantIdQueryOptions = (args: UseGetApiTaxRegistrationsForMerchantIdArgs) =>
      queryOptions({
        queryKey: ['GET /tax-registrations/for-merchant/{id}', 'Tax Registrations', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/tax-registrations/for-merchant/{id}', { id: args.id }), getTaxRegistrationForMerchantProductResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiTaxRegistrationsForMerchantId = (args: UseGetApiTaxRegistrationsForMerchantIdArgs) => useQuery(getApiTaxRegistrationsForMerchantIdQueryOptions(args));
