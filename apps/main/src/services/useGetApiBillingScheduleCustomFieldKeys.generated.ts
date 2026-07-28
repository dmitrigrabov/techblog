import {listBillingScheduleCustomFieldKeysResponse} from 'packages/models/src/listBillingScheduleCustomFieldKeysResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch} from '@/lib/api/client'

export type UseGetApiBillingScheduleCustomFieldKeysArgs = {Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiBillingScheduleCustomFieldKeysQueryOptions = (args: UseGetApiBillingScheduleCustomFieldKeysArgs) =>
      queryOptions({
        queryKey: ['GET /billing-schedule-custom-field-keys', 'Billing Schedules', args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch('/billing-schedule-custom-field-keys', listBillingScheduleCustomFieldKeysResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiBillingScheduleCustomFieldKeys = (args: UseGetApiBillingScheduleCustomFieldKeysArgs) => useQuery(getApiBillingScheduleCustomFieldKeysQueryOptions(args));
