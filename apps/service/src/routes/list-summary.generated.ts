import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import { getInvoicesListSummary } from "./handlers/list-summary";
import type { InvoiceListSummaryResponse } from "packages/models/src/invoiceListSummaryResponse.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get(
  "/invoices/list-summary",
  validate(
    "query",
    z.object({
      before: z.string().optional(),
      after: z.string().optional(),
      limit: z.coerce.number().int().optional(),
      sortOrder: z.enum(["ASC", "DESC"]).optional(),
      sortBy: z.string().optional(),
      invoiceStatus: z.string().optional(),
      invoicePaymentStatus: z.string().optional(),
      customerId: z.string().optional(),
      billingScheduleId: z.string().optional(),
      dueBefore: z.string().optional(),
      dueAfter: z.string().optional(),
      sentBefore: z.string().optional(),
      sentAfter: z.string().optional(),
      invoiceBefore: z.string().optional(),
      invoiceAfter: z.string().optional(),
      excludeZeroQuantity: z
        .preprocess((v) => (v === "true" ? true : v === "false" ? false : v), z.boolean())
        .optional(),
      invoiceCurrency: z.string().optional(),
      search: z.string().optional(),
      invoiceNumber: z.string().optional(),
      netTotal: z.coerce.number().optional(),
      excludeInvoiceStatus: z.string().optional(),
      excludeInvoicePaymentStatus: z.string().optional(),
      excludeCustomerId: z.string().optional(),
      excludeBillingScheduleId: z.string().optional(),
      excludeInvoiceCurrency: z.string().optional(),
      excludeInvoiceNumber: z.string().optional(),
      excludeNetTotal: z.coerce.number().optional(),
      excludeSearch: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getInvoicesListSummary({ db, env: c.env, user: c.var.user, query }));
  },
);

export type GetInvoicesListSummaryInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
    before?: string | undefined;
    after?: string | undefined;
    limit?: number | undefined;
    sortOrder?: ("ASC" | "DESC") | undefined;
    sortBy?: string | undefined;
    invoiceStatus?: string | undefined;
    invoicePaymentStatus?: string | undefined;
    customerId?: string | undefined;
    billingScheduleId?: string | undefined;
    dueBefore?: string | undefined;
    dueAfter?: string | undefined;
    sentBefore?: string | undefined;
    sentAfter?: string | undefined;
    invoiceBefore?: string | undefined;
    invoiceAfter?: string | undefined;
    excludeZeroQuantity?: boolean | undefined;
    invoiceCurrency?: string | undefined;
    search?: string | undefined;
    invoiceNumber?: string | undefined;
    netTotal?: number | undefined;
    excludeInvoiceStatus?: string | undefined;
    excludeInvoicePaymentStatus?: string | undefined;
    excludeCustomerId?: string | undefined;
    excludeBillingScheduleId?: string | undefined;
    excludeInvoiceCurrency?: string | undefined;
    excludeInvoiceNumber?: string | undefined;
    excludeNetTotal?: number | undefined;
    excludeSearch?: string | undefined;
  };
};

export type GetInvoicesListSummaryHandler = (
  input: GetInvoicesListSummaryInput,
) => Promise<InvoiceListSummaryResponse>;
