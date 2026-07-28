import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import { getInvoicesSummary } from "./handlers/summary";
import type { InvoiceSummaryResponse } from "packages/models/src/invoiceSummaryResponse.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get(
  "/invoices/summary",
  validate(
    "query",
    z.object({
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
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const query = c.req.valid("query");
    return c.json(await getInvoicesSummary({ db, env: c.env, user: c.var.user, query }));
  },
);

export type GetInvoicesSummaryInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  query: {
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
  };
};

export type GetInvoicesSummaryHandler = (
  input: GetInvoicesSummaryInput,
) => Promise<InvoiceSummaryResponse>;
