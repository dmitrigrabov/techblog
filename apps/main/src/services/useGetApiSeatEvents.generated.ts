import {listSeatEventsEndpointEndpointResponseModel} from 'packages/models/src/listSeatEventsEndpointEndpointResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiSeatEventsArgs = {Authorization: string, before?: string | undefined, after?: string | undefined, limit?: number | undefined, sortOrder?: string | undefined, customerAlias?: string | undefined, customerIds?: string | undefined, seatType?: string | undefined, customerEventId?: string | undefined, eventTimestampBefore?: string | undefined, eventTimestampAfter?: string | undefined, sortBy?: string | undefined, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiSeatEventsQueryOptions = (args: UseGetApiSeatEventsArgs) =>
      queryOptions({
        queryKey: ['GET /seat-events', 'Seat Events', args.Authorization, args.before, args.after, args.limit, args.sortOrder, args.customerAlias, args.customerIds, args.seatType, args.customerEventId, args.eventTimestampBefore, args.eventTimestampAfter, args.sortBy, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/seat-events', { before: args.before, after: args.after, limit: args.limit, sortOrder: args.sortOrder, customerAlias: args.customerAlias, customerIds: args.customerIds, seatType: args.seatType, customerEventId: args.customerEventId, eventTimestampBefore: args.eventTimestampBefore, eventTimestampAfter: args.eventTimestampAfter, sortBy: args.sortBy }), listSeatEventsEndpointEndpointResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiSeatEvents = (args: UseGetApiSeatEventsArgs) => useQuery(getApiSeatEventsQueryOptions(args));
