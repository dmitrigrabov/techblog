import {priceResponsePaginatedPriceResponseModel} from 'packages/models/src/priceResponsePaginatedPriceResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiPricesArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, sortOrder?: string | undefined, currency?: string | undefined, name?: string | undefined, billingFrequency?: string | undefined, productId?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiPricesQueryOptions = (args: UseGetApiPricesArgs) =>
      queryOptions({
        queryKey: ['GET /prices', 'Prices', args.Authorization, args.limit, args.after, args.before, args.sortOrder, args.currency, args.name, args.billingFrequency, args.productId, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/prices', { limit: args.limit, after: args.after, before: args.before, sortOrder: args.sortOrder, currency: args.currency, name: args.name, billingFrequency: args.billingFrequency, productId: args.productId }), priceResponsePaginatedPriceResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiPrices = (args: UseGetApiPricesArgs) => useQuery(getApiPricesQueryOptions(args));
