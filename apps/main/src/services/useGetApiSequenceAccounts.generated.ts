import {listSequenceAccountsResponse} from 'packages/models/src/listSequenceAccountsResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiSequenceAccountsArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiSequenceAccountsQueryOptions = (args: UseGetApiSequenceAccountsArgs) =>
      queryOptions({
        queryKey: ['GET /sequence-accounts', 'Accounts', args.Authorization, args.limit, args.after, args.before, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/sequence-accounts', { limit: args.limit, after: args.after, before: args.before }), listSequenceAccountsResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiSequenceAccounts = (args: UseGetApiSequenceAccountsArgs) => useQuery(getApiSequenceAccountsQueryOptions(args));
