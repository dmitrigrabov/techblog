import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import {
  updateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel,
  type UpdateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel,
} from "packages/models/src/updateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel.generated.ts";
import { createDb, type Db } from "../db";
import { putInvoicesRenderSettingsId, getInvoicesRenderSettings } from "./handlers/render-settings";
import type { UpdateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel } from "packages/models/src/updateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel.generated.ts";
import type { GetOrCreateInvoiceRenderSettingsEndpointProductCreateInvoiceRenderSettingsResponseModel } from "packages/models/src/getOrCreateInvoiceRenderSettingsEndpointProductCreateInvoiceRenderSettingsResponseModel.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.put(
  "/invoices/render-settings/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putInvoicesRenderSettingsId({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);
app.get("/invoices/render-settings", async (c) => {
  const db = createDb(c.env.DB);
  return c.json(await getInvoicesRenderSettings({ db, env: c.env, user: c.var.user }));
});

export type PutInvoicesRenderSettingsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateInvoiceRenderSettingsEndpointUpdateInvoiceRenderSettingsRequestModel;
};

export type PutInvoicesRenderSettingsIdHandler = (
  input: PutInvoicesRenderSettingsIdInput,
) => Promise<UpdateInvoiceRenderSettingsEndpointProductUpdateInvoiceRenderSettingsResponseModel>;

export type GetInvoicesRenderSettingsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
};

export type GetInvoicesRenderSettingsHandler = (
  input: GetInvoicesRenderSettingsInput,
) => Promise<GetOrCreateInvoiceRenderSettingsEndpointProductCreateInvoiceRenderSettingsResponseModel>;
