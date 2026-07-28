import {listListPricesEndpointResponseModel} from 'packages/models/src/listListPricesEndpointResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiListPricesArgs = {Authorization: string, currency?: string | undefined, productId?: string | undefined, billingFrequency?: string | undefined, includeArchived?: boolean | undefined, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiListPricesQueryOptions = (args: UseGetApiListPricesArgs) =>
      queryOptions({
        queryKey: ['GET /list-prices', 'List Prices', args.Authorization, args.currency, args.productId, args.billingFrequency, args.includeArchived, args.limit, args.after, args.before, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/list-prices', { currency: args.currency, productId: args.productId, billingFrequency: args.billingFrequency, includeArchived: args.includeArchived, limit: args.limit, after: args.after, before: args.before }), listListPricesEndpointResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiListPrices = (args: UseGetApiListPricesArgs) => useQuery(getApiListPricesQueryOptions(args));
