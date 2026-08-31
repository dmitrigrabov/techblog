import {listSequenceUsersResponse} from 'packages/models/src/listSequenceUsersResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiUsersArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiUsersQueryOptions = (args: UseGetApiUsersArgs) =>
      queryOptions({
        queryKey: ['GET /users', 'Users', args.Authorization, args.limit, args.after, args.before, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/users', { limit: args.limit, after: args.after, before: args.before }), listSequenceUsersResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiUsers = (args: UseGetApiUsersArgs) => useQuery(getApiUsersQueryOptions(args));
