import {oneTimePriceResponse} from 'packages/models/src/oneTimePriceResponse.generated.ts'
import {fixedPriceResponse} from 'packages/models/src/fixedPriceResponse.generated.ts'
import {linearPriceResponse} from 'packages/models/src/linearPriceResponse.generated.ts'
import {packagePriceResponse} from 'packages/models/src/packagePriceResponse.generated.ts'
import {seatBasedPriceResponse} from 'packages/models/src/seatBasedPriceResponse.generated.ts'
import {graduatedPriceResponse} from 'packages/models/src/graduatedPriceResponse.generated.ts'
import {volumePriceResponse} from 'packages/models/src/volumePriceResponse.generated.ts'
import {z} from 'zod'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiPricesIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const useGetApiPricesIdResponse = z.union([oneTimePriceResponse, fixedPriceResponse, linearPriceResponse, packagePriceResponse, seatBasedPriceResponse, graduatedPriceResponse, volumePriceResponse]);

export const getApiPricesIdQueryOptions = (args: UseGetApiPricesIdArgs) =>
      queryOptions({
        queryKey: ['GET /prices/{id}', 'Prices', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/prices/{id}', { id: args.id }), useGetApiPricesIdResponse, { method: 'GET' })
      });

export const useGetApiPricesId = (args: UseGetApiPricesIdArgs) => useQuery(getApiPricesIdQueryOptions(args));
