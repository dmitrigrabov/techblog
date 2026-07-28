import {stable20240730ListResponseModel} from 'packages/models/src/stable20240730ListResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiProductsArgs = {Authorization: string, name?: string | undefined, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiProductsQueryOptions = (args: UseGetApiProductsArgs) =>
      queryOptions({
        queryKey: ['GET /products', 'Products', args.Authorization, args.name, args.limit, args.after, args.before, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/products', { name: args.name, limit: args.limit, after: args.after, before: args.before }), stable20240730ListResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiProducts = (args: UseGetApiProductsArgs) => useQuery(getApiProductsQueryOptions(args));
