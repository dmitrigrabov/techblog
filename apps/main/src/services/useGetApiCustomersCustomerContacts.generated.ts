import {contactResponseModel} from 'packages/models/src/contactResponseModel.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCustomersCustomerContactsArgs = {customer: string, Authorization: string, includeArchived?: boolean | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiCustomersCustomerContactsQueryOptions = (args: UseGetApiCustomersCustomerContactsArgs) =>
      queryOptions({
        queryKey: ['GET /customers/{customer}/contacts', 'Contacts', args.customer, args.Authorization, args.includeArchived, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/customers/{customer}/contacts', { customer: args.customer, includeArchived: args.includeArchived }), contactResponseModel, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiCustomersCustomerContacts = (args: UseGetApiCustomersCustomerContactsArgs) => useQuery(getApiCustomersCustomerContactsQueryOptions(args));
