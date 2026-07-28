import {listBillingSchedulesResponse} from 'packages/models/src/listBillingSchedulesResponse.generated.ts'
import {useQuery, queryOptions, keepPreviousData} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiBillingSchedulesArgs = {Authorization: string, customerId?: string | undefined, billingScheduleStatus?: string | undefined, autoSendInvoices?: string | undefined, label?: string | undefined, includeArchivedSchedules?: string | undefined, startingBefore?: string | undefined, startingAfter?: string | undefined, endingBefore?: string | undefined, endingAfter?: string | undefined, includeOpenEndedSchedules?: string | undefined, recurrenceDayOfMonth?: string | undefined, sortBy?: string | undefined, before?: string | undefined, after?: string | undefined, limit?: number | undefined, sortOrder?: string | undefined, 'sequence-version'?: '2024-07-30' | undefined};

export const getApiBillingSchedulesQueryOptions = (args: UseGetApiBillingSchedulesArgs) =>
      queryOptions({
        queryKey: ['GET /billing-schedules', 'Billing Schedules', args.Authorization, args.customerId, args.billingScheduleStatus, args.autoSendInvoices, args.label, args.includeArchivedSchedules, args.startingBefore, args.startingAfter, args.endingBefore, args.endingAfter, args.includeOpenEndedSchedules, args.recurrenceDayOfMonth, args.sortBy, args.before, args.after, args.limit, args.sortOrder, args.'sequence-version'],
        queryFn: () => apiFetch(buildUrl('/billing-schedules', { customerId: args.customerId, billingScheduleStatus: args.billingScheduleStatus, autoSendInvoices: args.autoSendInvoices, label: args.label, includeArchivedSchedules: args.includeArchivedSchedules, startingBefore: args.startingBefore, startingAfter: args.startingAfter, endingBefore: args.endingBefore, endingAfter: args.endingAfter, includeOpenEndedSchedules: args.includeOpenEndedSchedules, recurrenceDayOfMonth: args.recurrenceDayOfMonth, sortBy: args.sortBy, before: args.before, after: args.after, limit: args.limit, sortOrder: args.sortOrder }), listBillingSchedulesResponse, { method: 'GET' }),
        placeholderData: keepPreviousData
      });

export const useGetApiBillingSchedules = (args: UseGetApiBillingSchedulesArgs) => useQuery(getApiBillingSchedulesQueryOptions(args));
