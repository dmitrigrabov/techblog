import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import {
  updateLineItemGroupRequestModel,
  type UpdateLineItemGroupRequestModel,
} from "packages/models/src/updateLineItemGroupRequestModel.generated.ts";
import { createDb, type Db } from "../db";
import {
  putInvoicesInvoiceLineItemGroupsId,
  deleteInvoicesInvoiceLineItemGroupsId,
  getInvoicesInvoiceLineItems,
  postInvoicesInvoiceLineItems,
  getInvoicesInvoiceLineItemGroups,
  postInvoicesInvoiceLineItemGroups,
  putInvoicesInvoiceLineItemsId,
  deleteInvoicesInvoiceLineItemsId,
} from "./handlers/{invoice}";
import type { LineItemGroupResponseModel } from "packages/models/src/lineItemGroupResponseModel.generated.ts";
import type { ListLineItemEndpointPaginatedLineItemResponseModel } from "packages/models/src/listLineItemEndpointPaginatedLineItemResponseModel.generated.ts";
import {
  stable20240101CreateOrUpdateLineItem,
  type Stable20240101CreateOrUpdateLineItem,
} from "packages/models/src/stable20240101CreateOrUpdateLineItem.generated.ts";
import type { Stable20240101LineItemResponse } from "packages/models/src/stable20240101LineItemResponse.generated.ts";
import type { ListLineItemGroupEndpointProductListLineItemGroupPaginatedResponseModel } from "packages/models/src/listLineItemGroupEndpointProductListLineItemGroupPaginatedResponseModel.generated.ts";
import {
  createLineItemGroupRequestModel,
  type CreateLineItemGroupRequestModel,
} from "packages/models/src/createLineItemGroupRequestModel.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.put(
  "/invoices/:invoice/line-item-groups/:id",
  validate("param", z.object({ invoice: z.string(), id: z.string() })),
  validate("json", updateLineItemGroupRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putInvoicesInvoiceLineItemGroupsId({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);
app.delete(
  "/invoices/:invoice/line-item-groups/:id",
  validate("param", z.object({ invoice: z.string(), id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await deleteInvoicesInvoiceLineItemGroupsId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.get(
  "/invoices/:invoice/line-items",
  validate("param", z.object({ invoice: z.string() })),
  validate(
    "query",
    z.object({
      before: z.string().optional(),
      after: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      sortOrder: z.enum(["ASC", "DESC"]).optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const query = c.req.valid("query");
    return c.json(
      await getInvoicesInvoiceLineItems({ db, env: c.env, user: c.var.user, params, query }),
    );
  },
);
app.post(
  "/invoices/:invoice/line-items",
  validate("param", z.object({ invoice: z.string() })),
  validate("json", stable20240101CreateOrUpdateLineItem),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await postInvoicesInvoiceLineItems({ db, env: c.env, user: c.var.user, params, body }),
      201,
    );
  },
);
app.get(
  "/invoices/:invoice/line-item-groups",
  validate("param", z.object({ invoice: z.string() })),
  validate(
    "query",
    z.object({
      before: z.string().optional(),
      after: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      sortOrder: z.enum(["ASC", "DESC"]).optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const query = c.req.valid("query");
    return c.json(
      await getInvoicesInvoiceLineItemGroups({ db, env: c.env, user: c.var.user, params, query }),
    );
  },
);
app.post(
  "/invoices/:invoice/line-item-groups",
  validate("param", z.object({ invoice: z.string() })),
  validate("json", createLineItemGroupRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await postInvoicesInvoiceLineItemGroups({ db, env: c.env, user: c.var.user, params, body }),
      201,
    );
  },
);
app.put(
  "/invoices/:invoice/line-items/:id",
  validate("param", z.object({ invoice: z.string(), id: z.string() })),
  validate("json", stable20240101CreateOrUpdateLineItem),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putInvoicesInvoiceLineItemsId({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);
app.delete(
  "/invoices/:invoice/line-items/:id",
  validate("param", z.object({ invoice: z.string(), id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await deleteInvoicesInvoiceLineItemsId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);

export type PutInvoicesInvoiceLineItemGroupsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { invoice: string; id: string };
  body: UpdateLineItemGroupRequestModel;
};

export type PutInvoicesInvoiceLineItemGroupsIdHandler = (
  input: PutInvoicesInvoiceLineItemGroupsIdInput,
) => Promise<LineItemGroupResponseModel>;

export type DeleteInvoicesInvoiceLineItemGroupsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { invoice: string; id: string };
};

export type DeleteInvoicesInvoiceLineItemGroupsIdHandler = (
  input: DeleteInvoicesInvoiceLineItemGroupsIdInput,
) => Promise<LineItemGroupResponseModel>;

export type GetInvoicesInvoiceLineItemsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { invoice: string };
  query: {
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: ("ASC" | "DESC") | undefined;
  };
};

export type GetInvoicesInvoiceLineItemsHandler = (
  input: GetInvoicesInvoiceLineItemsInput,
) => Promise<ListLineItemEndpointPaginatedLineItemResponseModel>;

export type PostInvoicesInvoiceLineItemsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { invoice: string };
  body: Stable20240101CreateOrUpdateLineItem;
};

export type PostInvoicesInvoiceLineItemsHandler = (
  input: PostInvoicesInvoiceLineItemsInput,
) => Promise<Stable20240101LineItemResponse>;

export type GetInvoicesInvoiceLineItemGroupsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { invoice: string };
  query: {
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: ("ASC" | "DESC") | undefined;
  };
};

export type GetInvoicesInvoiceLineItemGroupsHandler = (
  input: GetInvoicesInvoiceLineItemGroupsInput,
) => Promise<ListLineItemGroupEndpointProductListLineItemGroupPaginatedResponseModel>;

export type PostInvoicesInvoiceLineItemGroupsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { invoice: string };
  body: CreateLineItemGroupRequestModel;
};

export type PostInvoicesInvoiceLineItemGroupsHandler = (
  input: PostInvoicesInvoiceLineItemGroupsInput,
) => Promise<LineItemGroupResponseModel>;

export type PutInvoicesInvoiceLineItemsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { invoice: string; id: string };
  body: Stable20240101CreateOrUpdateLineItem;
};

export type PutInvoicesInvoiceLineItemsIdHandler = (
  input: PutInvoicesInvoiceLineItemsIdInput,
) => Promise<Stable20240101LineItemResponse>;

export type DeleteInvoicesInvoiceLineItemsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { invoice: string; id: string };
};

export type DeleteInvoicesInvoiceLineItemsIdHandler = (
  input: DeleteInvoicesInvoiceLineItemsIdInput,
) => Promise<Stable20240101LineItemResponse>;
