import {usageMetricCalculationResponse} from 'packages/models/src/usageMetricCalculationResponse.generated.ts'
import {useQuery, queryOptions} from '@tanstack/react-query'
import {apiFetch, buildUrl} from '@/lib/api/client'

export type UseGetApiUsageMetricsUsageMetricIdCalculateArgs = {usageMetricId: string, Authorization: string, customerAliases: string, periodStart: string, periodEnd: string, customParameters?: string | undefined, 'Sequence-Version'?: '2024-07-30' | undefined};

export const getApiUsageMetricsUsageMetricIdCalculateQueryOptions = (args: UseGetApiUsageMetricsUsageMetricIdCalculateArgs) =>
      queryOptions({
        queryKey: ['GET /usage-metrics/{usageMetricId}/calculate', 'Usage Metrics', args.usageMetricId, args.Authorization, args.customerAliases, args.periodStart, args.periodEnd, args.customParameters, args.'Sequence-Version'],
        queryFn: () => apiFetch(buildUrl('/usage-metrics/{usageMetricId}/calculate', { usageMetricId: args.usageMetricId, customerAliases: args.customerAliases, periodStart: args.periodStart, periodEnd: args.periodEnd, customParameters: args.customParameters }), usageMetricCalculationResponse, { method: 'GET' })
      });

export const useGetApiUsageMetricsUsageMetricIdCalculate = (args: UseGetApiUsageMetricsUsageMetricIdCalculateArgs) => useQuery(getApiUsageMetricsUsageMetricIdCalculateQueryOptions(args));
