import {creditGrant} from 'packages/models/src/creditGrant.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCreditsIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCreditsIdQueryOptions = (args: UseGetApiCreditsIdArgs) =>
      queryOptions({
        queryKey: ['GET /credits/{id}', 'Credits', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/credits/{id}', { id: args.id }), creditGrant, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCreditsId = (args: UseGetApiCreditsIdArgs) => useQuery(getApiCreditsIdQueryOptions(args));
