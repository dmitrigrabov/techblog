import {z} from 'zod'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiCreditNotesIdDownloadArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const useGetApiCreditNotesIdDownloadResponse = z.void();

export const getApiCreditNotesIdDownloadQueryOptions = (args: UseGetApiCreditNotesIdDownloadArgs) =>
      queryOptions({
        queryKey: ['GET /credit-notes/{id}/download', 'Credit Notes', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/credit-notes/{id}/download', { id: args.id }), useGetApiCreditNotesIdDownloadResponse, { method: 'GET' })
      });

export const useGetApiCreditNotesIdDownload = (args: UseGetApiCreditNotesIdDownloadArgs) => useQuery(getApiCreditNotesIdDownloadQueryOptions(args));
