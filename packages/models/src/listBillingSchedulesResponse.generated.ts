import {
  type BillingScheduleResponse,
  billingScheduleResponse,
} from "packages/models/src/billingScheduleResponse.generated.ts";
import {
  type PaginationMeta1,
  paginationMeta1,
} from "packages/models/src/paginationMeta1.generated.ts";
import { z } from "zod";

export type ListBillingSchedulesResponse = {
  items: Array<BillingScheduleResponse>;
  pagination: PaginationMeta1;
};

export const listBillingSchedulesResponse = z.object({
  items: z.array(billingScheduleResponse),
  pagination: paginationMeta1,
});
