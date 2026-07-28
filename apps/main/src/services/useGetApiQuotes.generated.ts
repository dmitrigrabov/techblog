import {listQuoteEndpointListQuotePaginatedResponseModel} from 'packages/models/src/listQuoteEndpointListQuotePaginatedResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiQuotesArgs = {Authorization: string, limit?: number | undefined, after?: string | undefined, before?: string | undefined, customerId?: string | undefined, includeArchived?: boolean | undefined, status?: string | undefined, createdBy?: string | undefined, title?: string | undefined, hasActiveApprovalWorkflow?: boolean | undefined, sortBy?: string | undefined, sortOrder?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiQuotesQueryOptions = (args: UseGetApiQuotesArgs) =>
      queryOptions({
        queryKey: ['GET /quotes', 'Quotes', args.Authorization, args.limit, args.after, args.before, args.customerId, args.includeArchived, args.status, args.createdBy, args.title, args.hasActiveApprovalWorkflow, args.sortBy, args.sortOrder, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/quotes', { limit: args.limit, after: args.after, before: args.before, customerId: args.customerId, includeArchived: args.includeArchived, status: args.status, createdBy: args.createdBy, title: args.title, hasActiveApprovalWorkflow: args.hasActiveApprovalWorkflow, sortBy: args.sortBy, sortOrder: args.sortOrder }), listQuoteEndpointListQuotePaginatedResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiQuotes = (args: UseGetApiQuotesArgs) => useQuery(getApiQuotesQueryOptions(args));
