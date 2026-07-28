import {creditNote} from 'packages/models/src/creditNote.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCreditNotesIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCreditNotesIdQueryOptions = (args: UseGetApiCreditNotesIdArgs) =>
      queryOptions({
        queryKey: ['GET /credit-notes/{id}', 'Credit Notes', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/credit-notes/{id}', { id: args.id }), creditNote, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCreditNotesId = (args: UseGetApiCreditNotesIdArgs) => useQuery(getApiCreditNotesIdQueryOptions(args));
