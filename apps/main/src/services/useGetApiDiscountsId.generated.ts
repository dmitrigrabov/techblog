import {discountResponse} from 'packages/models/src/discountResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiDiscountsIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiDiscountsIdQueryOptions = (args: UseGetApiDiscountsIdArgs) =>
      queryOptions({
        queryKey: ['GET /discounts/{id}', 'Discounts', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/discounts/{id}', { id: args.id }), discountResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiDiscountsId = (args: UseGetApiDiscountsIdArgs) => useQuery(getApiDiscountsIdQueryOptions(args));
