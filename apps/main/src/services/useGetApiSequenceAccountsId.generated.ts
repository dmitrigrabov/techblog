import {sequenceAccount} from 'packages/models/src/sequenceAccount.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiSequenceAccountsIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiSequenceAccountsIdQueryOptions = (args: UseGetApiSequenceAccountsIdArgs) =>
      queryOptions({
        queryKey: ['GET /sequence-accounts/{id}', 'Accounts', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/sequence-accounts/{id}', { id: args.id }), sequenceAccount, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiSequenceAccountsId = (args: UseGetApiSequenceAccountsIdArgs) => useQuery(getApiSequenceAccountsIdQueryOptions(args));
