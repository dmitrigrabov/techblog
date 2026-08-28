import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import {
  reconcileInvoicesWithIntegrationEndpointReconcileInvoicesWithIntegrationRequest,
  type ReconcileInvoicesWithIntegrationEndpointReconcileInvoicesWithIntegrationRequest,
} from "packages/models/src/reconcileInvoicesWithIntegrationEndpointReconcileInvoicesWithIntegrationRequest.generated.ts";
import { createDb, type Db } from "../db";
import { postInvoicesReconcileWithIntegration } from "./handlers/reconcile-with-integration";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.post(
  "/invoices/reconcile-with-integration",
  validate("json", reconcileInvoicesWithIntegrationEndpointReconcileInvoicesWithIntegrationRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(
      await postInvoicesReconcileWithIntegration({ db, env: c.env, user: c.var.user, body }),
    );
  },
);

export type PostInvoicesReconcileWithIntegrationInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: ReconcileInvoicesWithIntegrationEndpointReconcileInvoicesWithIntegrationRequest;
};

export type PostInvoicesReconcileWithIntegrationHandler = (
  input: PostInvoicesReconcileWithIntegrationInput,
) => Promise<void>;
