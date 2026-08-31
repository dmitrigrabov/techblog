import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import {
  getNotificationsPolicies,
  postNotificationsPolicies,
  postNotificationsPoliciesIdRecipients,
  getNotificationsPoliciesId,
  deleteNotificationsPoliciesId,
  postNotificationsPoliciesIdNotificationTypes,
  deleteNotificationsPoliciesIdRecipientsRecipient,
  deleteNotificationsPoliciesIdNotificationTypesType,
} from "./handlers/policies";
import type { NotificationPolicies } from "packages/models/src/notificationPolicies.generated.ts";
import {
  createNotificationPolicyRequest,
  type CreateNotificationPolicyRequest,
} from "packages/models/src/createNotificationPolicyRequest.generated.ts";
import type { NotificationPolicy } from "packages/models/src/notificationPolicy.generated.ts";
import {
  addRecipientsToPolicyRequest,
  type AddRecipientsToPolicyRequest,
} from "packages/models/src/addRecipientsToPolicyRequest.generated.ts";
import {
  addNotificationTypesToPolicyRequest,
  type AddNotificationTypesToPolicyRequest,
} from "packages/models/src/addNotificationTypesToPolicyRequest.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get(
  "/notifications/policies",
  validate(
    "query",
    z.object({
      notificationType: z
        .enum([
          "CUSTOMER_CREATED",
          "CUSTOMER_UPDATED",
          "CUSTOMER_ARCHIVED",
          "INVOICE_CREATED",
          "INVOICE_ISSUED",
          "INVOICE_UPDATED",
          "INTEGRATION_SYNC_COMPLETED",
          "INTEGRATION_WEBHOOK_HANDLED",
          "MERCHANT_UPDATED",
          "BILLING_SCHEDULE_CREATED",
          "BILLING_SCHEDULE_UPDATED",
          "BILLING_SCHEDULE_ARCHIVED",
          "CREDIT_NOTE_CREATED",
          "CREDIT_NOTE_UPDATED",
          "CREDIT_NOTE_ISSUED",
          "QUOTE_PUBLISHED",
          "QUOTE_ACCEPTED",
          "QUOTE_SIGNED",
          "INVOICE_REMINDER_SENT",
          "WATCHTOWER_TASK_ASSIGNED",
        ])
        .optional(),
      limit: z.coerce.number().int().optional(),
      after: z.string().optional(),
      before: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getNotificationsPolicies({ db, env: c.env, user: c.var.user, query }));
  },
);
app.post(
  "/notifications/policies",
  validate("json", createNotificationPolicyRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(await postNotificationsPolicies({ db, env: c.env, user: c.var.user, body }), 201);
  },
);
app.post(
  "/notifications/policies/:id/recipients",
  validate("param", z.object({ id: z.string() })),
  validate("json", addRecipientsToPolicyRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await postNotificationsPoliciesIdRecipients({
        db,
        env: c.env,
        user: c.var.user,
        params,
        body,
      }),
    );
  },
);
app.get(
  "/notifications/policies/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(await getNotificationsPoliciesId({ db, env: c.env, user: c.var.user, params }));
  },
);
app.delete(
  "/notifications/policies/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await deleteNotificationsPoliciesId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.post(
  "/notifications/policies/:id/notification-types",
  validate("param", z.object({ id: z.string() })),
  validate("json", addNotificationTypesToPolicyRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await postNotificationsPoliciesIdNotificationTypes({
        db,
        env: c.env,
        user: c.var.user,
        params,
        body,
      }),
    );
  },
);
app.delete(
  "/notifications/policies/:id/recipients/:recipient",
  validate("param", z.object({ id: z.string(), recipient: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await deleteNotificationsPoliciesIdRecipientsRecipient({
        db,
        env: c.env,
        user: c.var.user,
        params,
      }),
    );
  },
);
app.delete(
  "/notifications/policies/:id/notification-types/:type",
  validate(
    "param",
    z.object({
      id: z.string(),
      type: z.enum([
        "CUSTOMER_CREATED",
        "CUSTOMER_UPDATED",
        "CUSTOMER_ARCHIVED",
        "INVOICE_CREATED",
        "INVOICE_ISSUED",
        "INVOICE_UPDATED",
        "INTEGRATION_SYNC_COMPLETED",
        "INTEGRATION_WEBHOOK_HANDLED",
        "MERCHANT_UPDATED",
        "BILLING_SCHEDULE_CREATED",
        "BILLING_SCHEDULE_UPDATED",
        "BILLING_SCHEDULE_ARCHIVED",
        "CREDIT_NOTE_CREATED",
        "CREDIT_NOTE_UPDATED",
        "CREDIT_NOTE_ISSUED",
        "QUOTE_PUBLISHED",
        "QUOTE_ACCEPTED",
        "QUOTE_SIGNED",
        "INVOICE_REMINDER_SENT",
        "WATCHTOWER_TASK_ASSIGNED",
      ]),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await deleteNotificationsPoliciesIdNotificationTypesType({
        db,
        env: c.env,
        user: c.var.user,
        params,
      }),
    );
  },
);

export type GetNotificationsPoliciesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    notificationType?:
      | (
          | "CUSTOMER_CREATED"
          | "CUSTOMER_UPDATED"
          | "CUSTOMER_ARCHIVED"
          | "INVOICE_CREATED"
          | "INVOICE_ISSUED"
          | "INVOICE_UPDATED"
          | "INTEGRATION_SYNC_COMPLETED"
          | "INTEGRATION_WEBHOOK_HANDLED"
          | "MERCHANT_UPDATED"
          | "BILLING_SCHEDULE_CREATED"
          | "BILLING_SCHEDULE_UPDATED"
          | "BILLING_SCHEDULE_ARCHIVED"
          | "CREDIT_NOTE_CREATED"
          | "CREDIT_NOTE_UPDATED"
          | "CREDIT_NOTE_ISSUED"
          | "QUOTE_PUBLISHED"
          | "QUOTE_ACCEPTED"
          | "QUOTE_SIGNED"
          | "INVOICE_REMINDER_SENT"
          | "WATCHTOWER_TASK_ASSIGNED"
        )
      | undefined;
    limit?: number | undefined;
    after?: string | undefined;
    before?: string | undefined;
  };
};

export type GetNotificationsPoliciesHandler = (
  input: GetNotificationsPoliciesInput,
) => Promise<NotificationPolicies>;

export type PostNotificationsPoliciesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateNotificationPolicyRequest;
};

export type PostNotificationsPoliciesHandler = (
  input: PostNotificationsPoliciesInput,
) => Promise<NotificationPolicy>;

export type PostNotificationsPoliciesIdRecipientsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: AddRecipientsToPolicyRequest;
};

export type PostNotificationsPoliciesIdRecipientsHandler = (
  input: PostNotificationsPoliciesIdRecipientsInput,
) => Promise<NotificationPolicy>;

export type GetNotificationsPoliciesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetNotificationsPoliciesIdHandler = (
  input: GetNotificationsPoliciesIdInput,
) => Promise<NotificationPolicy>;

export type DeleteNotificationsPoliciesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeleteNotificationsPoliciesIdHandler = (
  input: DeleteNotificationsPoliciesIdInput,
) => Promise<NotificationPolicy>;

export type PostNotificationsPoliciesIdNotificationTypesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: AddNotificationTypesToPolicyRequest;
};

export type PostNotificationsPoliciesIdNotificationTypesHandler = (
  input: PostNotificationsPoliciesIdNotificationTypesInput,
) => Promise<NotificationPolicy>;

export type DeleteNotificationsPoliciesIdRecipientsRecipientInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string; recipient: string };
};

export type DeleteNotificationsPoliciesIdRecipientsRecipientHandler = (
  input: DeleteNotificationsPoliciesIdRecipientsRecipientInput,
) => Promise<NotificationPolicy>;

export type DeleteNotificationsPoliciesIdNotificationTypesTypeInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: {
    id: string;
    type:
      | "CUSTOMER_CREATED"
      | "CUSTOMER_UPDATED"
      | "CUSTOMER_ARCHIVED"
      | "INVOICE_CREATED"
      | "INVOICE_ISSUED"
      | "INVOICE_UPDATED"
      | "INTEGRATION_SYNC_COMPLETED"
      | "INTEGRATION_WEBHOOK_HANDLED"
      | "MERCHANT_UPDATED"
      | "BILLING_SCHEDULE_CREATED"
      | "BILLING_SCHEDULE_UPDATED"
      | "BILLING_SCHEDULE_ARCHIVED"
      | "CREDIT_NOTE_CREATED"
      | "CREDIT_NOTE_UPDATED"
      | "CREDIT_NOTE_ISSUED"
      | "QUOTE_PUBLISHED"
      | "QUOTE_ACCEPTED"
      | "QUOTE_SIGNED"
      | "INVOICE_REMINDER_SENT"
      | "WATCHTOWER_TASK_ASSIGNED";
  };
};

export type DeleteNotificationsPoliciesIdNotificationTypesTypeHandler = (
  input: DeleteNotificationsPoliciesIdNotificationTypesTypeInput,
) => Promise<NotificationPolicy>;
