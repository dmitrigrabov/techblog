import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { createDb, type Db } from "../db";
import {
  getPaymentsSettings,
  putPaymentsSettingsId,
  postPaymentsSettingsBillingSchedules,
  getPaymentsSettingsBillingSchedulesId,
  putPaymentsSettingsBillingSchedulesId,
  deletePaymentsSettingsBillingSchedulesId,
  getPaymentsSettingsBillingSchedulesForBillingScheduleId,
  postPaymentsSettingsInvoices,
  getPaymentsSettingsInvoicesForInvoiceId,
  getPaymentsSettingsInvoicesId,
  putPaymentsSettingsInvoicesId,
  deletePaymentsSettingsInvoicesId,
  postPaymentsSettingsCustomers,
  getPaymentsSettingsCustomersId,
  putPaymentsSettingsCustomersId,
  deletePaymentsSettingsCustomersId,
} from "./handlers/settings";
import type { AccountPaymentSettings } from "packages/models/src/accountPaymentSettings.generated.ts";
import { z } from "zod";
import {
  updateAccountPaymentSettingsEndpointUpdateAccountPaymentSettingsRequest,
  type UpdateAccountPaymentSettingsEndpointUpdateAccountPaymentSettingsRequest,
} from "packages/models/src/updateAccountPaymentSettingsEndpointUpdateAccountPaymentSettingsRequest.generated.ts";
import {
  createBillingScheduleSettingsEndpointCreateBillingScheduleSettingsRequestModel,
  type CreateBillingScheduleSettingsEndpointCreateBillingScheduleSettingsRequestModel,
} from "packages/models/src/createBillingScheduleSettingsEndpointCreateBillingScheduleSettingsRequestModel.generated.ts";
import type { BillingScheduleSettings } from "packages/models/src/billingScheduleSettings.generated.ts";
import {
  updateBillingScheduleSettingsEndpointUpdateBillingScheduleSettingsRequestModel,
  type UpdateBillingScheduleSettingsEndpointUpdateBillingScheduleSettingsRequestModel,
} from "packages/models/src/updateBillingScheduleSettingsEndpointUpdateBillingScheduleSettingsRequestModel.generated.ts";
import {
  createInvoiceSettingsEndpointCreateInvoiceSettingsRequestModel,
  type CreateInvoiceSettingsEndpointCreateInvoiceSettingsRequestModel,
} from "packages/models/src/createInvoiceSettingsEndpointCreateInvoiceSettingsRequestModel.generated.ts";
import type { CreateInvoiceSettingsEndpointProductCreateInvoiceSettingsResponseModel } from "packages/models/src/createInvoiceSettingsEndpointProductCreateInvoiceSettingsResponseModel.generated.ts";
import type { GetByInvoiceIdProductGetInvoiceSettingsResponseModel } from "packages/models/src/getByInvoiceIdProductGetInvoiceSettingsResponseModel.generated.ts";
import type { GetInvoiceSettingsEndpointProductGetInvoiceSettingsResponseModel } from "packages/models/src/getInvoiceSettingsEndpointProductGetInvoiceSettingsResponseModel.generated.ts";
import {
  updateInvoiceSettingsEndpointUpdateInvoiceSettingsRequestModel,
  type UpdateInvoiceSettingsEndpointUpdateInvoiceSettingsRequestModel,
} from "packages/models/src/updateInvoiceSettingsEndpointUpdateInvoiceSettingsRequestModel.generated.ts";
import type { UpdateInvoiceSettingsEndpointProductUpdateInvoiceSettingsResponseModel } from "packages/models/src/updateInvoiceSettingsEndpointProductUpdateInvoiceSettingsResponseModel.generated.ts";
import type { DeleteInvoiceSettingsEndpointProductDeleteInvoiceSettingsResponseModel } from "packages/models/src/deleteInvoiceSettingsEndpointProductDeleteInvoiceSettingsResponseModel.generated.ts";
import {
  createCustomerSettingsEndpointCreateCustomerSettingsRequestModel,
  type CreateCustomerSettingsEndpointCreateCustomerSettingsRequestModel,
} from "packages/models/src/createCustomerSettingsEndpointCreateCustomerSettingsRequestModel.generated.ts";
import type { CreateCustomerSettingsEndpointProductCreateCustomerSettingsResponseModel } from "packages/models/src/createCustomerSettingsEndpointProductCreateCustomerSettingsResponseModel.generated.ts";
import type { GetCustomerSettingsEndpointProductGetCustomerSettingsResponseModel } from "packages/models/src/getCustomerSettingsEndpointProductGetCustomerSettingsResponseModel.generated.ts";
import {
  updateCustomerSettingsEndpointUpdateCustomerSettingsRequestModel,
  type UpdateCustomerSettingsEndpointUpdateCustomerSettingsRequestModel,
} from "packages/models/src/updateCustomerSettingsEndpointUpdateCustomerSettingsRequestModel.generated.ts";
import type { UpdateCustomerSettingsEndpointProductUpdateCustomerSettingsResponseModel } from "packages/models/src/updateCustomerSettingsEndpointProductUpdateCustomerSettingsResponseModel.generated.ts";
import type { DeleteCustomerSettingsEndpointProductDeleteCustomerSettingsResponseModel } from "packages/models/src/deleteCustomerSettingsEndpointProductDeleteCustomerSettingsResponseModel.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get("/payments/settings", async (c) => {
  const db = createDb(c.env.DB);
  return c.json(await getPaymentsSettings({ db, env: c.env, user: c.var.user }));
});
app.put(
  "/payments/settings/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateAccountPaymentSettingsEndpointUpdateAccountPaymentSettingsRequest),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(await putPaymentsSettingsId({ db, env: c.env, user: c.var.user, params, body }));
  },
);
app.post(
  "/payments/settings/billing-schedules",
  validate("json", createBillingScheduleSettingsEndpointCreateBillingScheduleSettingsRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(
      await postPaymentsSettingsBillingSchedules({ db, env: c.env, user: c.var.user, body }),
      201,
    );
  },
);
app.get(
  "/payments/settings/billing-schedules/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await getPaymentsSettingsBillingSchedulesId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.put(
  "/payments/settings/billing-schedules/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateBillingScheduleSettingsEndpointUpdateBillingScheduleSettingsRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putPaymentsSettingsBillingSchedulesId({
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
  "/payments/settings/billing-schedules/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await deletePaymentsSettingsBillingSchedulesId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.get(
  "/payments/settings/billing-schedules/for-billing-schedule/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await getPaymentsSettingsBillingSchedulesForBillingScheduleId({
        db,
        env: c.env,
        user: c.var.user,
        params,
      }),
    );
  },
);
app.post(
  "/payments/settings/invoices",
  validate("json", createInvoiceSettingsEndpointCreateInvoiceSettingsRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(
      await postPaymentsSettingsInvoices({ db, env: c.env, user: c.var.user, body }),
      201,
    );
  },
);
app.get(
  "/payments/settings/invoices/for-invoice/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await getPaymentsSettingsInvoicesForInvoiceId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.get(
  "/payments/settings/invoices/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await getPaymentsSettingsInvoicesId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.put(
  "/payments/settings/invoices/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateInvoiceSettingsEndpointUpdateInvoiceSettingsRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putPaymentsSettingsInvoicesId({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);
app.delete(
  "/payments/settings/invoices/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await deletePaymentsSettingsInvoicesId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.post(
  "/payments/settings/customers",
  validate("json", createCustomerSettingsEndpointCreateCustomerSettingsRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const body = c.req.valid("json");
    return c.json(
      await postPaymentsSettingsCustomers({ db, env: c.env, user: c.var.user, body }),
      201,
    );
  },
);
app.get(
  "/payments/settings/customers/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await getPaymentsSettingsCustomersId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);
app.put(
  "/payments/settings/customers/:id",
  validate("param", z.object({ id: z.string() })),
  validate("json", updateCustomerSettingsEndpointUpdateCustomerSettingsRequestModel),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const body = c.req.valid("json");
    return c.json(
      await putPaymentsSettingsCustomersId({ db, env: c.env, user: c.var.user, params, body }),
    );
  },
);
app.delete(
  "/payments/settings/customers/:id",
  validate("param", z.object({ id: z.string() })),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    return c.json(
      await deletePaymentsSettingsCustomersId({ db, env: c.env, user: c.var.user, params }),
    );
  },
);

export type GetPaymentsSettingsInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
};

export type GetPaymentsSettingsHandler = (
  input: GetPaymentsSettingsInput,
) => Promise<AccountPaymentSettings>;

export type PutPaymentsSettingsIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateAccountPaymentSettingsEndpointUpdateAccountPaymentSettingsRequest;
};

export type PutPaymentsSettingsIdHandler = (
  input: PutPaymentsSettingsIdInput,
) => Promise<AccountPaymentSettings>;

export type PostPaymentsSettingsBillingSchedulesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateBillingScheduleSettingsEndpointCreateBillingScheduleSettingsRequestModel;
};

export type PostPaymentsSettingsBillingSchedulesHandler = (
  input: PostPaymentsSettingsBillingSchedulesInput,
) => Promise<BillingScheduleSettings>;

export type GetPaymentsSettingsBillingSchedulesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetPaymentsSettingsBillingSchedulesIdHandler = (
  input: GetPaymentsSettingsBillingSchedulesIdInput,
) => Promise<BillingScheduleSettings>;

export type PutPaymentsSettingsBillingSchedulesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateBillingScheduleSettingsEndpointUpdateBillingScheduleSettingsRequestModel;
};

export type PutPaymentsSettingsBillingSchedulesIdHandler = (
  input: PutPaymentsSettingsBillingSchedulesIdInput,
) => Promise<BillingScheduleSettings>;

export type DeletePaymentsSettingsBillingSchedulesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeletePaymentsSettingsBillingSchedulesIdHandler = (
  input: DeletePaymentsSettingsBillingSchedulesIdInput,
) => Promise<BillingScheduleSettings>;

export type GetPaymentsSettingsBillingSchedulesForBillingScheduleIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetPaymentsSettingsBillingSchedulesForBillingScheduleIdHandler = (
  input: GetPaymentsSettingsBillingSchedulesForBillingScheduleIdInput,
) => Promise<BillingScheduleSettings>;

export type PostPaymentsSettingsInvoicesInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateInvoiceSettingsEndpointCreateInvoiceSettingsRequestModel;
};

export type PostPaymentsSettingsInvoicesHandler = (
  input: PostPaymentsSettingsInvoicesInput,
) => Promise<CreateInvoiceSettingsEndpointProductCreateInvoiceSettingsResponseModel>;

export type GetPaymentsSettingsInvoicesForInvoiceIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetPaymentsSettingsInvoicesForInvoiceIdHandler = (
  input: GetPaymentsSettingsInvoicesForInvoiceIdInput,
) => Promise<GetByInvoiceIdProductGetInvoiceSettingsResponseModel>;

export type GetPaymentsSettingsInvoicesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetPaymentsSettingsInvoicesIdHandler = (
  input: GetPaymentsSettingsInvoicesIdInput,
) => Promise<GetInvoiceSettingsEndpointProductGetInvoiceSettingsResponseModel>;

export type PutPaymentsSettingsInvoicesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateInvoiceSettingsEndpointUpdateInvoiceSettingsRequestModel;
};

export type PutPaymentsSettingsInvoicesIdHandler = (
  input: PutPaymentsSettingsInvoicesIdInput,
) => Promise<UpdateInvoiceSettingsEndpointProductUpdateInvoiceSettingsResponseModel>;

export type DeletePaymentsSettingsInvoicesIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeletePaymentsSettingsInvoicesIdHandler = (
  input: DeletePaymentsSettingsInvoicesIdInput,
) => Promise<DeleteInvoiceSettingsEndpointProductDeleteInvoiceSettingsResponseModel>;

export type PostPaymentsSettingsCustomersInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  body: CreateCustomerSettingsEndpointCreateCustomerSettingsRequestModel;
};

export type PostPaymentsSettingsCustomersHandler = (
  input: PostPaymentsSettingsCustomersInput,
) => Promise<CreateCustomerSettingsEndpointProductCreateCustomerSettingsResponseModel>;

export type GetPaymentsSettingsCustomersIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type GetPaymentsSettingsCustomersIdHandler = (
  input: GetPaymentsSettingsCustomersIdInput,
) => Promise<GetCustomerSettingsEndpointProductGetCustomerSettingsResponseModel>;

export type PutPaymentsSettingsCustomersIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
  body: UpdateCustomerSettingsEndpointUpdateCustomerSettingsRequestModel;
};

export type PutPaymentsSettingsCustomersIdHandler = (
  input: PutPaymentsSettingsCustomersIdInput,
) => Promise<UpdateCustomerSettingsEndpointProductUpdateCustomerSettingsResponseModel>;

export type DeletePaymentsSettingsCustomersIdInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { id: string };
};

export type DeletePaymentsSettingsCustomersIdHandler = (
  input: DeletePaymentsSettingsCustomersIdInput,
) => Promise<DeleteCustomerSettingsEndpointProductDeleteCustomerSettingsResponseModel>;
