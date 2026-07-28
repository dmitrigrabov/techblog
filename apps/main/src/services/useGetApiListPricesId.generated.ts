import {oneTimeListPriceResponse} from 'packages/models/src/oneTimeListPriceResponse.generated.ts'
import {fixedListPriceResponse} from 'packages/models/src/fixedListPriceResponse.generated.ts'
import {linearListPriceResponse} from 'packages/models/src/linearListPriceResponse.generated.ts'
import {packageListPriceResponse} from 'packages/models/src/packageListPriceResponse.generated.ts'
import {seatBasedListPriceResponse} from 'packages/models/src/seatBasedListPriceResponse.generated.ts'
import {graduatedListPriceResponse} from 'packages/models/src/graduatedListPriceResponse.generated.ts'
import {volumeListPriceResponse} from 'packages/models/src/volumeListPriceResponse.generated.ts'
import {z} from 'zod'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiListPricesIdArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const useGetApiListPricesIdResponse = z.union([oneTimeListPriceResponse, fixedListPriceResponse, linearListPriceResponse, packageListPriceResponse, seatBasedListPriceResponse, graduatedListPriceResponse, volumeListPriceResponse]);

export const getApiListPricesIdQueryOptions = (args: UseGetApiListPricesIdArgs) =>
      queryOptions({
        queryKey: ['GET /list-prices/{id}', 'List Prices', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/list-prices/{id}', { id: args.id }), useGetApiListPricesIdResponse, { method: 'GET' })
      });

export const useGetApiListPricesId = (args: UseGetApiListPricesIdArgs) => useQuery(getApiListPricesIdQueryOptions(args));
