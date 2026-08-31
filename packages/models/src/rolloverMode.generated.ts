import { z } from "zod";

export type RolloverMode = "NONE" | "ON_GRANT_REFRESH" | "ON_GRANT_REFRESH_AND_PHASE";

export const rolloverMode = z.enum(["NONE", "ON_GRANT_REFRESH", "ON_GRANT_REFRESH_AND_PHASE"]);
