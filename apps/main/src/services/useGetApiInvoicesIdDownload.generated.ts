import {z} from 'zod'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiInvoicesIdDownloadArgs = {id: string, Authorization: string, 'sequence-version'?: '2024-07-30' | undefined};

export const useGetApiInvoicesIdDownloadResponse = z.void();

export const getApiInvoicesIdDownloadQueryOptions = (args: UseGetApiInvoicesIdDownloadArgs) =>
      queryOptions({
        queryKey: ['GET /invoices/{id}/download', 'Invoices', args.id, args.Authorization, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/invoices/{id}/download', { id: args.id }), useGetApiInvoicesIdDownloadResponse, { method: 'GET' })
      });

export const useGetApiInvoicesIdDownload = (args: UseGetApiInvoicesIdDownloadArgs) => useQuery(getApiInvoicesIdDownloadQueryOptions(args));
