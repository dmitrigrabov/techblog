import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import {
  mergeInvoicesEndpointRequestBody,
  type MergeInvoicesEndpointRequestBody,
} from "packages/models/src/mergeInvoicesEndpointRequestBody.generated.ts";
import { createDb, type Db } from "../db";
import { postInvoicesMerge } from "./handlers/merge";
import type { Invoice } from "packages/models/src/invoice.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.post("/invoices/merge", validate("json", mergeInvoicesEndpointRequestBody), async (c) => {
  const db = createDb(c.env.DB);
  const body = c.req.valid("json");
  return c.json(await postInvoicesMerge({ db, env: c.env, user: c.var.user, body }), 201);
});

export type PostInvoicesMergeInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: MergeInvoicesEndpointRequestBody;
};

export type PostInvoicesMergeHandler = (input: PostInvoicesMergeInput) => Promise<Invoice>;
