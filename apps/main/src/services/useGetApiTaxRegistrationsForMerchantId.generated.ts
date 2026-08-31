import {merchantTaxRegistrationsResponse} from 'packages/models/src/merchantTaxRegistrationsResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiTaxRegistrationsForMerchantIdArgs = {id: string, Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiTaxRegistrationsForMerchantIdQueryOptions = (args: UseGetApiTaxRegistrationsForMerchantIdArgs) =>
      queryOptions({
        queryKey: ['GET /tax-registrations/for-merchant/{id}', 'Tax Registrations', args.id, args.Authorization, args.limit, args.after, args.before, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/tax-registrations/for-merchant/{id}', { id: args.id, limit: args.limit, after: args.after, before: args.before }), merchantTaxRegistrationsResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiTaxRegistrationsForMerchantId = (args: UseGetApiTaxRegistrationsForMerchantIdArgs) => useQuery(getApiTaxRegistrationsForMerchantIdQueryOptions(args));
