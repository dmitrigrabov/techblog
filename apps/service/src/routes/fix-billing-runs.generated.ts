import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse } from "./errors";
import { createDb, type Db } from "../db";
import { postInvoicesFixBillingRuns } from "./handlers/fix-billing-runs";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.post("/invoices/fix-billing-runs", async (c) => {
  const db = createDb(c.env.DB);
  return c.json(await postInvoicesFixBillingRuns({ db, env: c.env, user: c.var.user }));
});

export type PostInvoicesFixBillingRunsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
};

export type PostInvoicesFixBillingRunsHandler = (
  input: PostInvoicesFixBillingRunsInput,
) => Promise<void>;
