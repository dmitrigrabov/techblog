import {customer} from 'packages/models/src/customer.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCustomersIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCustomersIdQueryOptions = (args: UseGetApiCustomersIdArgs) =>
      queryOptions({
        queryKey: ['GET /customers/{id}', 'Customers', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/customers/{id}', { id: args.id }), customer, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCustomersId = (args: UseGetApiCustomersIdArgs) => useQuery(getApiCustomersIdQueryOptions(args));
