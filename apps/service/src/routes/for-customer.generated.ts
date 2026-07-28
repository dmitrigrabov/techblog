import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import { getTaxRegistrationsForCustomerId } from "./handlers/for-customer";
import type { GetTaxRegistrationForCustomerProductResponse } from "packages/models/src/getTaxRegistrationForCustomerProductResponse.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get(
  "/tax-registrations/for-customer/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await getTaxRegistrationsForCustomerId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);

export type GetTaxRegistrationsForCustomerIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetTaxRegistrationsForCustomerIdHandler = (
  input: GetTaxRegistrationsForCustomerIdInput,
) => Promise<GetTaxRegistrationForCustomerProductResponse>;
