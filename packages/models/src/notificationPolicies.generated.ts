import {
  type NotificationPolicy,
  notificationPolicy,
} from "packages/models/src/notificationPolicy.generated.ts";
import {
  type PaginationResponse2,
  paginationResponse2,
} from "packages/models/src/paginationResponse2.generated.ts";
import { z } from "zod";

export type NotificationPolicies = {
  items: Array<NotificationPolicy>;
  pagination: PaginationResponse2;
};

export const notificationPolicies = z.object({
  items: z.array(notificationPolicy),
  pagination: paginationResponse2,
});
