import {z} from 'zod'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiQuotesIdDownloadArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const useGetApiQuotesIdDownloadResponse = z.void();

export const getApiQuotesIdDownloadQueryOptions = (args: UseGetApiQuotesIdDownloadArgs) =>
      queryOptions({
        queryKey: ['GET /quotes/{id}/download', 'Quotes', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/quotes/{id}/download', { id: args.id }), useGetApiQuotesIdDownloadResponse, { method: 'GET' })
      });

export const useGetApiQuotesIdDownload = (args: UseGetApiQuotesIdDownloadArgs) => useQuery(getApiQuotesIdDownloadQueryOptions(args));
