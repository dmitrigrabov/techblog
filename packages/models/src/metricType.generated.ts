import { z } from "zod";

export type MetricType = "SIMPLE" | "GROUPED";

export const metricType = z.enum(["SIMPLE", "GROUPED"]);
