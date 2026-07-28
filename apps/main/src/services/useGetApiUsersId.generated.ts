import {sequenceUserResponse} from 'packages/models/src/sequenceUserResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiUsersIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiUsersIdQueryOptions = (args: UseGetApiUsersIdArgs) =>
      queryOptions({
        queryKey: ['GET /users/{id}', 'Users', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/users/{id}', { id: args.id }), sequenceUserResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiUsersId = (args: UseGetApiUsersIdArgs) => useQuery(getApiUsersIdQueryOptions(args));
