import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import {
  updateCreditNoteLineItemGroupEndpointUpdateCreditNoteLineItemGroupRequestModel,
  type UpdateCreditNoteLineItemGroupEndpointUpdateCreditNoteLineItemGroupRequestModel,
} from "packages/models/src/updateCreditNoteLineItemGroupEndpointUpdateCreditNoteLineItemGroupRequestModel.generated.ts";
import { createDb, type Db } from "../db";
import {
  putCreditNotesCreditnoteLineItemGroupsId,
  deleteCreditNotesCreditnoteLineItemGroupsId,
  putCreditNotesCreditnoteLineItemsId,
  deleteCreditNotesCreditnoteLineItemsId,
  getCreditNotesCreditnoteLineItemGroups,
  postCreditNotesCreditnoteLineItemGroups,
  getCreditNotesCreditnoteLineItems,
  postCreditNotesCreditnoteLineItems,
} from "./handlers/{creditnote}";
import type { UpdateCreditNoteLineItemGroupEndpointProductUpdateCreditNoteLineItemGroupResponseModel } from "packages/models/src/updateCreditNoteLineItemGroupEndpointProductUpdateCreditNoteLineItemGroupResponseModel.generated.ts";
import type { DeleteCreditNoteLineItemGroupEndpointProductDeleteCreditNoteLineItemGroupResponseModel } from "packages/models/src/deleteCreditNoteLineItemGroupEndpointProductDeleteCreditNoteLineItemGroupResponseModel.generated.ts";
import {
  updateCreditNoteLineItemEndpointUpdateCreditNoteLineItemRequestModel,
  type UpdateCreditNoteLineItemEndpointUpdateCreditNoteLineItemRequestModel,
} from "packages/models/src/updateCreditNoteLineItemEndpointUpdateCreditNoteLineItemRequestModel.generated.ts";
import type { UpdateCreditNoteLineItemEndpointProductUpdateCreditNoteLineItemResponseModel } from "packages/models/src/updateCreditNoteLineItemEndpointProductUpdateCreditNoteLineItemResponseModel.generated.ts";
import type { DeleteCreditNoteLineItemEndpointProductDeleteCreditNoteLineItemResponseModel } from "packages/models/src/deleteCreditNoteLineItemEndpointProductDeleteCreditNoteLineItemResponseModel.generated.ts";
import type { ListCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupPaginatedResponseModel } from "packages/models/src/listCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupPaginatedResponseModel.generated.ts";
import {
  createCreditNoteLineItemGroupEndpointCreateCreditNoteLineItemGroupRequestModel,
  type CreateCreditNoteLineItemGroupEndpointCreateCreditNoteLineItemGroupRequestModel,
} from "packages/models/src/createCreditNoteLineItemGroupEndpointCreateCreditNoteLineItemGroupRequestModel.generated.ts";
import type { CreateCreditNoteLineItemGroupEndpointProductCreateCreditNoteLineItemGroupResponseModel } from "packages/models/src/createCreditNoteLineItemGroupEndpointProductCreateCreditNoteLineItemGroupResponseModel.generated.ts";
import type { ListCreditNoteLineItemEndpointProductListCreditNoteLineItemPaginatedResponseModel } from "packages/models/src/listCreditNoteLineItemEndpointProductListCreditNoteLineItemPaginatedResponseModel.generated.ts";
import {
  stable20240101CreateCreditNoteLineItemRequestModel,
  type Stable20240101CreateCreditNoteLineItemRequestModel,
} from "packages/models/src/stable20240101CreateCreditNoteLineItemRequestModel.generated.ts";
import type { Stable20240101ProductCreateCreditNoteLineItemResponseModel } from "packages/models/src/stable20240101ProductCreateCreditNoteLineItemResponseModel.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.put(
  "/credit-notes/:creditnote/line-item-groups/:id",
  validate("param", z.object({ creditnote: z.string(), id: z.string() })),
  validate("json", updateCreditNoteLineItemGroupEndpointUpdateCreditNoteLineItemGroupRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putCreditNotesCreditnoteLineItemGroupsId({
        db,
        env: c.env,
        user: c.var.user,
        params,
        body,
      }),
    );
  },
);
app.delete(
  "/credit-notes/:creditnote/line-item-groups/:id",
  validate("param", z.object({ creditnote: z.string(), id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await deleteCreditNotesCreditnoteLineItemGroupsId({
        db,
        env: c.env,
        user: c.var.user,
        params,
      }),
    );
  },
);
app.put(
  "/credit-notes/:creditnote/line-items/:id",
  validate("param", z.object({ creditnote: z.string(), id: z.string() })),
  validate("json", updateCreditNoteLineItemEndpointUpdateCreditNoteLineItemRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putCreditNotesCreditnoteLineItemsId({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);
app.delete(
  "/credit-notes/:creditnote/line-items/:id",
  validate("param", z.object({ creditnote: z.string(), id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await deleteCreditNotesCreditnoteLineItemsId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.get(
  "/credit-notes/:creditnote/line-item-groups",
  validate("param", z.object({ creditnote: z.string() })),
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
      await getCreditNotesCreditnoteLineItemGroups({
        db,
        env: c.env,
        user: c.var.user,
        params,
        query,
      }),
    );
  },
);
app.post(
  "/credit-notes/:creditnote/line-item-groups",
  validate("param", z.object({ creditnote: z.string() })),
  validate("json", createCreditNoteLineItemGroupEndpointCreateCreditNoteLineItemGroupRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await postCreditNotesCreditnoteLineItemGroups({
        db,
        env: c.env,
        user: c.var.user,
        params,
        body,
      }),
      201,
    );
  },
);
app.get(
  "/credit-notes/:creditnote/line-items",
  validate("param", z.object({ creditnote: z.string() })),
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
      await getCreditNotesCreditnoteLineItems({ db, env: c.env, user: c.var.user, params, query }),
    );
  },
);
app.post(
  "/credit-notes/:creditnote/line-items",
  validate("param", z.object({ creditnote: z.string() })),
  validate("json", stable20240101CreateCreditNoteLineItemRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await postCreditNotesCreditnoteLineItems({ db, env: c.env, user: c.var.user, params, body }),
      201,
    );
  },
);

export type PutCreditNotesCreditnoteLineItemGroupsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { creditnote: string; id: string };
  body: UpdateCreditNoteLineItemGroupEndpointUpdateCreditNoteLineItemGroupRequestModel;
};

export type PutCreditNotesCreditnoteLineItemGroupsIdHandler = (
  input: PutCreditNotesCreditnoteLineItemGroupsIdInput,
) => Promise<UpdateCreditNoteLineItemGroupEndpointProductUpdateCreditNoteLineItemGroupResponseModel>;

export type DeleteCreditNotesCreditnoteLineItemGroupsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { creditnote: string; id: string };
};

export type DeleteCreditNotesCreditnoteLineItemGroupsIdHandler = (
  input: DeleteCreditNotesCreditnoteLineItemGroupsIdInput,
) => Promise<DeleteCreditNoteLineItemGroupEndpointProductDeleteCreditNoteLineItemGroupResponseModel>;

export type PutCreditNotesCreditnoteLineItemsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { creditnote: string; id: string };
  body: UpdateCreditNoteLineItemEndpointUpdateCreditNoteLineItemRequestModel;
};

export type PutCreditNotesCreditnoteLineItemsIdHandler = (
  input: PutCreditNotesCreditnoteLineItemsIdInput,
) => Promise<UpdateCreditNoteLineItemEndpointProductUpdateCreditNoteLineItemResponseModel>;

export type DeleteCreditNotesCreditnoteLineItemsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { creditnote: string; id: string };
};

export type DeleteCreditNotesCreditnoteLineItemsIdHandler = (
  input: DeleteCreditNotesCreditnoteLineItemsIdInput,
) => Promise<DeleteCreditNoteLineItemEndpointProductDeleteCreditNoteLineItemResponseModel>;

export type GetCreditNotesCreditnoteLineItemGroupsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { creditnote: string };
  query: {
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: ("ASC" | "DESC") | undefined;
  };
};

export type GetCreditNotesCreditnoteLineItemGroupsHandler = (
  input: GetCreditNotesCreditnoteLineItemGroupsInput,
) => Promise<ListCreditNoteLineItemGroupEndpointProductListCreditNoteLineItemGroupPaginatedResponseModel>;

export type PostCreditNotesCreditnoteLineItemGroupsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { creditnote: string };
  body: CreateCreditNoteLineItemGroupEndpointCreateCreditNoteLineItemGroupRequestModel;
};

export type PostCreditNotesCreditnoteLineItemGroupsHandler = (
  input: PostCreditNotesCreditnoteLineItemGroupsInput,
) => Promise<CreateCreditNoteLineItemGroupEndpointProductCreateCreditNoteLineItemGroupResponseModel>;

export type GetCreditNotesCreditnoteLineItemsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { creditnote: string };
  query: {
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: ("ASC" | "DESC") | undefined;
  };
};

export type GetCreditNotesCreditnoteLineItemsHandler = (
  input: GetCreditNotesCreditnoteLineItemsInput,
) => Promise<ListCreditNoteLineItemEndpointProductListCreditNoteLineItemPaginatedResponseModel>;

export type PostCreditNotesCreditnoteLineItemsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { creditnote: string };
  body: Stable20240101CreateCreditNoteLineItemRequestModel;
};

export type PostCreditNotesCreditnoteLineItemsHandler = (
  input: PostCreditNotesCreditnoteLineItemsInput,
) => Promise<Stable20240101ProductCreateCreditNoteLineItemResponseModel>;
