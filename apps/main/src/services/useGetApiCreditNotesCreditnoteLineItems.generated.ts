import {listCreditNoteLineItemEndpointProductListCreditNoteLineItemPaginatedResponseModel} from 'packages/models/src/listCreditNoteLineItemEndpointProductListCreditNoteLineItemPaginatedResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCreditNotesCreditnoteLineItemsArgs = {creditnote: string, Authorization: string, before?: string | undefined, after?: string | undefined, limit?: number | undefined, sortOrder?: ('ASC' | 'DESC') | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCreditNotesCreditnoteLineItemsQueryOptions = (args: UseGetApiCreditNotesCreditnoteLineItemsArgs) =>
      queryOptions({
        queryKey: ['GET /credit-notes/{creditnote}/line-items', 'Credit Note Line Items', args.creditnote, args.Authorization, args.before, args.after, args.limit, args.sortOrder, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/credit-notes/{creditnote}/line-items', { creditnote: args.creditnote, before: args.before, after: args.after, limit: args.limit, sortOrder: args.sortOrder }), listCreditNoteLineItemEndpointProductListCreditNoteLineItemPaginatedResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCreditNotesCreditnoteLineItems = (args: UseGetApiCreditNotesCreditnoteLineItemsArgs) => useQuery(getApiCreditNotesCreditnoteLineItemsQueryOptions(args));
