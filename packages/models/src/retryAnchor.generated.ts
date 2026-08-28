import { z } from "zod";

export type RetryAnchor = "SENT_DATE" | "DUE_DATE";

export const retryAnchor = z.enum(["SENT_DATE", "DUE_DATE"]);
