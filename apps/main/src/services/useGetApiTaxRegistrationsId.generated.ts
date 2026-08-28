import {productGetTaxRegistrationResponseModel} from 'packages/models/src/productGetTaxRegistrationResponseModel.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiTaxRegistrationsIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiTaxRegistrationsIdQueryOptions = (args: UseGetApiTaxRegistrationsIdArgs) =>
      queryOptions({
        queryKey: ['GET /tax-registrations/{id}', 'Tax Registrations', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/tax-registrations/{id}', { id: args.id }), productGetTaxRegistrationResponseModel, { method: 'GET' })
      });

export const useGetApiTaxRegistrationsId = (args: UseGetApiTaxRegistrationsIdArgs) => useQuery(getApiTaxRegistrationsIdQueryOptions(args));
