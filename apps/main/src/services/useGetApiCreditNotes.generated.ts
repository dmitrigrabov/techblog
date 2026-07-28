import {listCreditNoteEndpointProductListCreditNotePaginatedResponseModel} from 'packages/models/src/listCreditNoteEndpointProductListCreditNotePaginatedResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCreditNotesArgs = {Authorization: string, before?: string | undefined, after?: string | undefined, limit?: number | undefined, sortOrder?: ('ASC' | 'DESC') | undefined, sortBy?: string | undefined, creditNoteStatus?: string | undefined, customerId?: string | undefined, sentBefore?: string | undefined, sentAfter?: string | undefined, searchCreditNoteNumber?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCreditNotesQueryOptions = (args: UseGetApiCreditNotesArgs) =>
      queryOptions({
        queryKey: ['GET /credit-notes', 'Credit Notes', args.Authorization, args.before, args.after, args.limit, args.sortOrder, args.sortBy, args.creditNoteStatus, args.customerId, args.sentBefore, args.sentAfter, args.searchCreditNoteNumber, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/credit-notes', { before: args.before, after: args.after, limit: args.limit, sortOrder: args.sortOrder, sortBy: args.sortBy, creditNoteStatus: args.creditNoteStatus, customerId: args.customerId, sentBefore: args.sentBefore, sentAfter: args.sentAfter, searchCreditNoteNumber: args.searchCreditNoteNumber }), listCreditNoteEndpointProductListCreditNotePaginatedResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCreditNotes = (args: UseGetApiCreditNotesArgs) => useQuery(getApiCreditNotesQueryOptions(args));
