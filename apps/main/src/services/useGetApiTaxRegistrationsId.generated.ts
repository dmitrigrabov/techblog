import {getTaxRegistrationEndpointProductGetTaxRegistrationResponseModel} from 'packages/models/src/getTaxRegistrationEndpointProductGetTaxRegistrationResponseModel.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiTaxRegistrationsIdArgs = {id: string, Authorization: string, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiTaxRegistrationsIdQueryOptions = (args: UseGetApiTaxRegistrationsIdArgs) =>
      queryOptions({
        queryKey: ['GET /tax-registrations/{id}', 'Tax Registrations', args.id, args.Authorization, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/tax-registrations/{id}', { id: args.id }), getTaxRegistrationEndpointProductGetTaxRegistrationResponseModel, { method: 'GET' })
      });

export const useGetApiTaxRegistrationsId = (args: UseGetApiTaxRegistrationsIdArgs) => useQuery(getApiTaxRegistrationsIdQueryOptions(args));
