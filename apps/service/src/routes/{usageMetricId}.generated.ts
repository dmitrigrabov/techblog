import { Hono } from "hono";
import type { Env } from "../env";
import { withAuth, type AuthVariables, type AuthUser } from "../middleware/auth";
import { toErrorResponse, validate } from "./errors";
import { z } from "zod";
import { createDb, type Db } from "../db";
import { getUsageMetricsUsageMetricIdCalculate } from "./handlers/{usageMetricId}";
import type { UsageMetricCalculationResponse } from "packages/models/src/usageMetricCalculationResponse.generated.ts";

export const app = new Hono<{ Bindings: Env; Variables: AuthVariables }>();

app.onError(toErrorResponse);

app.use("*", withAuth);

app.get(
  "/usage-metrics/:usageMetricId/calculate",
  validate("param", z.object({ usageMetricId: z.string() })),
  validate(
    "query",
    z.object({
      customerAliases: z.string(),
      periodStart: z.string(),
      periodEnd: z.string(),
      customParameters: z.string().optional(),
    }),
  ),
  async (c) => {
    const db = createDb(c.env.DB);
    const params = c.req.valid("param");
    const query = c.req.valid("query");
    return c.json(
      await getUsageMetricsUsageMetricIdCalculate({
        db,
        env: c.env,
        user: c.var.user,
        params,
        query,
      }),
    );
  },
);

export type GetUsageMetricsUsageMetricIdCalculateInput = {
  db: Db;
  env: Env;
  user: AuthUser | null;
  params: { usageMetricId: string };
  query: {
    customerAliases: string;
    periodStart: string;
    periodEnd: string;
    customParameters?: string | undefined;
  };
};

export type GetUsageMetricsUsageMetricIdCalculateHandler = (
  input: GetUsageMetricsUsageMetricIdCalculateInput,
) => Promise<UsageMetricCalculationResponse>;
