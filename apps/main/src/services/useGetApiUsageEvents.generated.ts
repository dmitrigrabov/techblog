import {listUsageEventEndpointEndpointResponseModel} from 'packages/models/src/listUsageEventEndpointEndpointResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiUsageEventsArgs = {Authorization: string, before?: string | undefined, after?: string | undefined, limit?: number | undefined, sortOrder?: string | undefined, offset?: number | undefined, customerAlias?: Array<unknown> | undefined, unmappedAliasesOnly?: boolean | undefined, eventType?: string | undefined, eventId?: string | undefined, eventTimestampBefore?: string | undefined, eventTimestampAfter?: string | undefined, sortBy?: string | undefined, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiUsageEventsQueryOptions = (args: UseGetApiUsageEventsArgs) =>
      queryOptions({
        queryKey: ['GET /usage-events', 'Usage Events', args.Authorization, args.before, args.after, args.limit, args.sortOrder, args.offset, args.customerAlias, args.unmappedAliasesOnly, args.eventType, args.eventId, args.eventTimestampBefore, args.eventTimestampAfter, args.sortBy, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/usage-events', { before: args.before, after: args.after, limit: args.limit, sortOrder: args.sortOrder, offset: args.offset, customerAlias: args.customerAlias, unmappedAliasesOnly: args.unmappedAliasesOnly, eventType: args.eventType, eventId: args.eventId, eventTimestampBefore: args.eventTimestampBefore, eventTimestampAfter: args.eventTimestampAfter, sortBy: args.sortBy }), listUsageEventEndpointEndpointResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiUsageEvents = (args: UseGetApiUsageEventsArgs) => useQuery(getApiUsageEventsQueryOptions(args));
