import {stripeCollectionSettings} from 'packages/models/src/stripeCollectionSettings.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch} from '@/lib/api/client'

export type UseGetApiStripeCollectionsSettingsArgs = {'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiStripeCollectionsSettingsQueryOptions = (args: UseGetApiStripeCollectionsSettingsArgs) =>
      queryOptions({
        queryKey: ['GET /stripe/collections/settings', 'Stripe Collection Settings', args.'Sequence-Version'],
        queryFn: () => apiFetch('/stripe/collections/settings', stripeCollectionSettings, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiStripeCollectionsSettings = (args: UseGetApiStripeCollectionsSettingsArgs) => useQuery(getApiStripeCollectionsSettingsQueryOptions(args));
