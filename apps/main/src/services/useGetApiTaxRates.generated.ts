import {listResponse} from 'packages/models/src/listResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiTaxRatesArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiTaxRatesQueryOptions = (args: UseGetApiTaxRatesArgs) =>
      queryOptions({
        queryKey: ['GET /tax-rates', 'Tax Rates', args.Authorization, args.limit, args.after, args.before, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/tax-rates', { limit: args.limit, after: args.after, before: args.before }), listResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiTaxRates = (args: UseGetApiTaxRatesArgs) => useQuery(getApiTaxRatesQueryOptions(args));
