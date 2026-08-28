import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import { getCustomersByAliasAlias } from "./handlers/by-alias";
import type { Customer20240509 } from "packages/models/src/customer20240509.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get(
  "/customers/by-alias/:alias",
  validate("param", z.object({ alias: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(await getCustomersByAliasAlias({ db, env: c.env, user: c.var.user, params }));
  },
);

export type GetCustomersByAliasAliasInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { alias: string };
};

export type GetCustomersByAliasAliasHandler = (
  input: GetCustomersByAliasAliasInput,
) => Promise<Customer20240509>;
