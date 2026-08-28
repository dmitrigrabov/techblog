import {listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupPaginatedResponseModel} from 'packages/models/src/listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupPaginatedResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCreditNotesCreditnoteLineItemGroupsArgs = {creditnote: string, Authorization: string, before?: string | undefined, after?: string | undefined, limit?: number | undefined, sortOrder?: ('ASC' | 'DESC') | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCreditNotesCreditnoteLineItemGroupsQueryOptions = (args: UseGetApiCreditNotesCreditnoteLineItemGroupsArgs) =>
      queryOptions({
        queryKey: ['GET /credit-notes/{creditnote}/line-item-groups', 'Credit Note Line Items', args.creditnote, args.Authorization, args.before, args.after, args.limit, args.sortOrder, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/credit-notes/{creditnote}/line-item-groups', { creditnote: args.creditnote, before: args.before, after: args.after, limit: args.limit, sortOrder: args.sortOrder }), listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupPaginatedResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCreditNotesCreditnoteLineItemGroups = (args: UseGetApiCreditNotesCreditnoteLineItemGroupsArgs) => useQuery(getApiCreditNotesCreditnoteLineItemGroupsQueryOptions(args));
