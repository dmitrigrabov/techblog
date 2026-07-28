import {customerCustomPropertyKeysControllerListCustomerCustomPropertyKeysResponse} from 'packages/models/src/customerCustomPropertyKeysControllerListCustomerCustomPropertyKeysResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch} from '@/lib/api/client'

export type UseGetApiCustomerCustomPropertyKeysArgs = {Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCustomerCustomPropertyKeysQueryOptions = (args: UseGetApiCustomerCustomPropertyKeysArgs) =>
      queryOptions({
        queryKey: ['GET /customer-custom-property-keys', 'Customers', args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch('/customer-custom-property-keys', customerCustomPropertyKeysControllerListCustomerCustomPropertyKeysResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCustomerCustomPropertyKeys = (args: UseGetApiCustomerCustomPropertyKeysArgs) => useQuery(getApiCustomerCustomPropertyKeysQueryOptions(args));
