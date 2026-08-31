import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import {
  getCustomersCustomerContacts,
  postCustomersCustomerContacts,
  postCustomersCustomerContactsIdArchive,
  putCustomersCustomerContactsId,
} from "./handlers/{customer}";
import type { ContactResponseModel } from "packages/models/src/contactResponseModel.generated.ts";
import {
  contactRequestModel,
  type ContactRequestModel,
} from "packages/models/src/contactRequestModel.generated.ts";
import type { Contact } from "packages/models/src/contact.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get(
  "/customers/:customer/contacts",
  validate("param", z.object({ customer: z.string() })),
  validate(
    "query",
    z.object({
      includeArchived: z
        .preprocess((v) => (v === "true" ? true : v === "false" ? false : v), z.boolean())
        .optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const query = c.req.valid("query");
    return c.json(
      await getCustomersCustomerContacts({ db, env: c.env, user: c.var.user, params, query }),
    );
  },
);
app.post(
  "/customers/:customer/contacts",
  validate("param", z.object({ customer: z.string() })),
  validate("json", contactRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await postCustomersCustomerContacts({ db, env: c.env, user: c.var.user, params, body }),
      201,
    );
  },
);
app.post(
  "/customers/:customer/contacts/:id/archive",
  validate("param", z.object({ customer: z.string(), id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await postCustomersCustomerContactsIdArchive({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.put(
  "/customers/:customer/contacts/:id",
  validate("param", z.object({ customer: z.string(), id: z.string() })),
  validate("json", contactRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putCustomersCustomerContactsId({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);

export type GetCustomersCustomerContactsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { customer: string };
  query: { includeArchived?: boolean | undefined };
};

export type GetCustomersCustomerContactsHandler = (
  input: GetCustomersCustomerContactsInput,
) => Promise<ContactResponseModel>;

export type PostCustomersCustomerContactsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { customer: string };
  body: ContactRequestModel;
};

export type PostCustomersCustomerContactsHandler = (
  input: PostCustomersCustomerContactsInput,
) => Promise<Contact>;

export type PostCustomersCustomerContactsIdArchiveInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { customer: string; id: string };
};

export type PostCustomersCustomerContactsIdArchiveHandler = (
  input: PostCustomersCustomerContactsIdArchiveInput,
) => Promise<Contact>;

export type PutCustomersCustomerContactsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { customer: string; id: string };
  body: ContactRequestModel;
};

export type PutCustomersCustomerContactsIdHandler = (
  input: PutCustomersCustomerContactsIdInput,
) => Promise<Contact>;
