import {
  type NotificationPolicy,
  notificationPolicy,
} from "packages/models/src/notificationPolicy.generated.ts";
import {
  type PaginationResponse,
  paginationResponse,
} from "packages/models/src/paginationResponse.generated.ts";
import { z } from "zod";

export type NotificationPolicies = {
  items: Array<NotificationPolicy>;
  pagination: PaginationResponse;
};

export const notificationPolicies = z.object({
  items: z.array(notificationPolicy),
  pagination: paginationResponse,
});
