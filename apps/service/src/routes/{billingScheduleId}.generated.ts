import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import {
  getBillingSchedulesBillingScheduleId,
  putBillingSchedulesBillingScheduleId,
  postBillingSchedulesBillingScheduleIdArchive,
  putBillingSchedulesBillingScheduleIdActivate,
  postBillingSchedulesBillingScheduleIdDuplicate,
} from "./handlers/{billingScheduleId}";
import type { BillingScheduleResponse } from "packages/models/src/billingScheduleResponse.generated.ts";
import {
  updateBillingScheduleRequest,
  type UpdateBillingScheduleRequest,
} from "packages/models/src/updateBillingScheduleRequest.generated.ts";
import {
  duplicateBillingScheduleRequest,
  type DuplicateBillingScheduleRequest,
} from "packages/models/src/duplicateBillingScheduleRequest.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get(
  "/billing-schedules/:billingScheduleId",
  validate("param", z.object({ billingScheduleId: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await getBillingSchedulesBillingScheduleId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.put(
  "/billing-schedules/:billingScheduleId",
  validate("param", z.object({ billingScheduleId: z.string() })),
  validate("json", updateBillingScheduleRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putBillingSchedulesBillingScheduleId({
        db,
        env: c.env,
        user: c.var.user,
        params,
        body,
      }),
    );
  },
);
app.post(
  "/billing-schedules/:billingScheduleId/archive",
  validate("param", z.object({ billingScheduleId: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await postBillingSchedulesBillingScheduleIdArchive({
        db,
        env: c.env,
        user: c.var.user,
        params,
      }),
    );
  },
);
app.put(
  "/billing-schedules/:billingScheduleId/activate",
  validate("param", z.object({ billingScheduleId: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await putBillingSchedulesBillingScheduleIdActivate({
        db,
        env: c.env,
        user: c.var.user,
        params,
      }),
    );
  },
);
app.post(
  "/billing-schedules/:billingScheduleId/duplicate",
  validate("param", z.object({ billingScheduleId: z.string() })),
  validate("json", duplicateBillingScheduleRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await postBillingSchedulesBillingScheduleIdDuplicate({
        db,
        env: c.env,
        user: c.var.user,
        params,
        body,
      }),
      201,
    );
  },
);

export type GetBillingSchedulesBillingScheduleIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { billingScheduleId: string };
};

export type GetBillingSchedulesBillingScheduleIdHandler = (
  input: GetBillingSchedulesBillingScheduleIdInput,
) => Promise<BillingScheduleResponse>;

export type PutBillingSchedulesBillingScheduleIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { billingScheduleId: string };
  body: UpdateBillingScheduleRequest;
};

export type PutBillingSchedulesBillingScheduleIdHandler = (
  input: PutBillingSchedulesBillingScheduleIdInput,
) => Promise<BillingScheduleResponse>;

export type PostBillingSchedulesBillingScheduleIdArchiveInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { billingScheduleId: string };
};

export type PostBillingSchedulesBillingScheduleIdArchiveHandler = (
  input: PostBillingSchedulesBillingScheduleIdArchiveInput,
) => Promise<BillingScheduleResponse>;

export type PutBillingSchedulesBillingScheduleIdActivateInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { billingScheduleId: string };
};

export type PutBillingSchedulesBillingScheduleIdActivateHandler = (
  input: PutBillingSchedulesBillingScheduleIdActivateInput,
) => Promise<BillingScheduleResponse>;

export type PostBillingSchedulesBillingScheduleIdDuplicateInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { billingScheduleId: string };
  body: DuplicateBillingScheduleRequest;
};

export type PostBillingSchedulesBillingScheduleIdDuplicateHandler = (
  input: PostBillingSchedulesBillingScheduleIdDuplicateInput,
) => Promise<BillingScheduleResponse>;
