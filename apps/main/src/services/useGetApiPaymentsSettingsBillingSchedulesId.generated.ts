import {billingScheduleSettings} from 'packages/models/src/billingScheduleSettings.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiPaymentsSettingsBillingSchedulesIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiPaymentsSettingsBillingSchedulesIdQueryOptions = (args: UseGetApiPaymentsSettingsBillingSchedulesIdArgs) =>
      queryOptions({
        queryKey: ['GET /payments/settings/billing-schedules/{id}', 'Billing Schedules', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/payments/settings/billing-schedules/{id}', { id: args.id }), billingScheduleSettings, { method: 'GET' })
      });

export const useGetApiPaymentsSettingsBillingSchedulesId = (args: UseGetApiPaymentsSettingsBillingSchedulesIdArgs) => useQuery(getApiPaymentsSettingsBillingSchedulesIdQueryOptions(args));
