import {
  type BillingScheduleResponse,
  billingScheduleResponse,
} from "packages/models/src/billingScheduleResponse.generated.ts";
import {
  type PaginationMeta,
  paginationMeta,
} from "packages/models/src/paginationMeta.generated.ts";
import { z } from "zod";

export type ListBillingSchedulesResponse = {
  items: Array<BillingScheduleResponse>;
  pagination: PaginationMeta;
};

export const listBillingSchedulesResponse = z.object({
  items: z.array(billingScheduleResponse),
  pagination: paginationMeta,
});
