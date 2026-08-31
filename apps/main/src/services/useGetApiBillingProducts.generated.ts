import {listBillingProductsResponse} from 'packages/models/src/listBillingProductsResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiBillingProductsArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, name?: string | undefined, taxCategoryId?: string | undefined, recognitionMethod?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiBillingProductsQueryOptions = (args: UseGetApiBillingProductsArgs) =>
      queryOptions({
        queryKey: ['GET /billing-products', 'Prices', args.Authorization, args.limit, args.after, args.before, args.name, args.taxCategoryId, args.recognitionMethod, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/billing-products', { limit: args.limit, after: args.after, before: args.before, name: args.name, taxCategoryId: args.taxCategoryId, recognitionMethod: args.recognitionMethod }), listBillingProductsResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiBillingProducts = (args: UseGetApiBillingProductsArgs) => useQuery(getApiBillingProductsQueryOptions(args));
