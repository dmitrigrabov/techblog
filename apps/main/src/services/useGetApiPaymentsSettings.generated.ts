import {accountPaymentSettings} from 'packages/models/src/accountPaymentSettings.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch} from '@/lib/api/client'

export type UseGetApiPaymentsSettingsArgs = {'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiPaymentsSettingsQueryOptions = (args: UseGetApiPaymentsSettingsArgs) =>
      queryOptions({
        queryKey: ['GET /payments/settings', 'Account Settings', args.'Sequence-Version'],
        queryFn: () => apiFetch('/payments/settings', accountPaymentSettings, { method: 'GET' })
      });

export const useGetApiPaymentsSettings = (args: UseGetApiPaymentsSettingsArgs) => useQuery(getApiPaymentsSettingsQueryOptions(args));
