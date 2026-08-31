import {seatEvent} from 'packages/models/src/seatEvent.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiSeatEventsIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiSeatEventsIdQueryOptions = (args: UseGetApiSeatEventsIdArgs) =>
      queryOptions({
        queryKey: ['GET /seat-events/{id}', 'Seat Events', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/seat-events/{id}', { id: args.id }), seatEvent, { method: 'GET' })
      });

export const useGetApiSeatEventsId = (args: UseGetApiSeatEventsIdArgs) => useQuery(getApiSeatEventsIdQueryOptions(args));
