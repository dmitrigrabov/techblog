import {stable20240730ProductResponse} from 'packages/models/src/stable20240730ProductResponse.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiProductsIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiProductsIdQueryOptions = (args: UseGetApiProductsIdArgs) =>
      queryOptions({
        queryKey: ['GET /products/{id}', 'Products', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/products/{id}', { id: args.id }), stable20240730ProductResponse, { method: 'GET' })
      });

export const useGetApiProductsId = (args: UseGetApiProductsIdArgs) => useQuery(getApiProductsIdQueryOptions(args));
