import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import { getCreditsCustomerIdGrants, getCreditsCustomerIdBalances } from "./handlers/{customerId}";
import type { CreditGrantsResponse } from "packages/models/src/creditGrantsResponse.generated.ts";
import type { CreditBalancesReply } from "packages/models/src/creditBalancesReply.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get(
  "/credits/:customerId/grants",
  validate("param", z.object({ customerId: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(await getCreditsCustomerIdGrants({ db, env: c.env, user: c.var.user, params }));
  },
);
app.get(
  "/credits/:customerId/balances",
  validate("param", z.object({ customerId: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(await getCreditsCustomerIdBalances({ db, env: c.env, user: c.var.user, params }));
  },
);

export type GetCreditsCustomerIdGrantsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { customerId: string };
};

export type GetCreditsCustomerIdGrantsHandler = (
  input: GetCreditsCustomerIdGrantsInput,
) => Promise<CreditGrantsResponse>;

export type GetCreditsCustomerIdBalancesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { customerId: string };
};

export type GetCreditsCustomerIdBalancesHandler = (
  input: GetCreditsCustomerIdBalancesInput,
) => Promise<CreditBalancesReply>;
