import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { createDb, type Db } from "../db";
import {
  getStripeCollectionsSettings,
  putStripeCollectionsSettingsId,
} from "./handlers/collections";
import type { StripeCollectionSettings } from "packages/models/src/stripeCollectionSettings.generated.ts";
import { z } from "zod";
import {
  updateStripeCollectionSettingsEndpointUpdateStripeCollectionSettingsRequest,
  type UpdateStripeCollectionSettingsEndpointUpdateStripeCollectionSettingsRequest,
} from "packages/models/src/updateStripeCollectionSettingsEndpointUpdateStripeCollectionSettingsRequest.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get("/stripe/collections/settings", async (c) => {
  const db = createDb(c.env.DB);
  return c.json(await getStripeCollectionsSettings({ db, env: c.env, user: c.var.user }));
});
app.put(
  "/stripe/collections/settings/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateStripeCollectionSettingsEndpointUpdateStripeCollectionSettingsRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putStripeCollectionsSettingsId({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);

export type GetStripeCollectionsSettingsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
};

export type GetStripeCollectionsSettingsHandler = (
  input: GetStripeCollectionsSettingsInput,
) => Promise<StripeCollectionSettings>;

export type PutStripeCollectionsSettingsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateStripeCollectionSettingsEndpointUpdateStripeCollectionSettingsRequest;
};

export type PutStripeCollectionsSettingsIdHandler = (
  input: PutStripeCollectionsSettingsIdInput,
) => Promise<StripeCollectionSettings>;
