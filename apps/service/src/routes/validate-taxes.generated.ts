import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import {
  createBillingScheduleRequest,
  type CreateBillingScheduleRequest,
} from "packages/models/src/createBillingScheduleRequest.generated.ts";
import { createDb, type Db } from "../db";
import { postBillingSchedulesValidateTaxes } from "./handlers/validate-taxes";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.post(
  "/billing-schedules/validate-taxes",
  validate("json", createBillingScheduleRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(
      await postBillingSchedulesValidateTaxes({ db, env: c.env, user: c.var.user, body }),
    );
  },
);

export type PostBillingSchedulesValidateTaxesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateBillingScheduleRequest;
};

export type PostBillingSchedulesValidateTaxesHandler = (
  input: PostBillingSchedulesValidateTaxesInput,
) => Promise<void>;
