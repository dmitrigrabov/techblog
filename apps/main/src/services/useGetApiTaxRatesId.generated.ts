import {taxRateResponse} from 'packages/models/src/taxRateResponse.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiTaxRatesIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiTaxRatesIdQueryOptions = (args: UseGetApiTaxRatesIdArgs) =>
      queryOptions({
        queryKey: ['GET /tax-rates/{id}', 'Tax Rates', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/tax-rates/{id}', { id: args.id }), taxRateResponse, { method: 'GET' })
      });

export const useGetApiTaxRatesId = (args: UseGetApiTaxRatesIdArgs) => useQuery(getApiTaxRatesIdQueryOptions(args));
