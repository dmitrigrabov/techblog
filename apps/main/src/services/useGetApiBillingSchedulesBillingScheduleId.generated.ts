import {billingScheduleResponse} from 'packages/models/src/billingScheduleResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiBillingSchedulesBillingScheduleIdArgs = {billingScheduleId: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiBillingSchedulesBillingScheduleIdQueryOptions = (args: UseGetApiBillingSchedulesBillingScheduleIdArgs) =>
      queryOptions({
        queryKey: ['GET /billing-schedules/{billingScheduleId}', 'Billing Schedules', args.billingScheduleId, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/billing-schedules/{billingScheduleId}', { billingScheduleId: args.billingScheduleId }), billingScheduleResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiBillingSchedulesBillingScheduleId = (args: UseGetApiBillingSchedulesBillingScheduleIdArgs) => useQuery(getApiBillingSchedulesBillingScheduleIdQueryOptions(args));
