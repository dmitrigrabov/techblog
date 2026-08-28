import {
  type CreditGrantResponseItem,
  creditGrantResponseItem,
} from "packages/models/src/creditGrantResponseItem.generated.ts";
import { z } from "zod";

export type CreditGrantsResponse = { items: Array<CreditGrantResponseItem> };

export const creditGrantsResponse = z.object({ items: z.array(creditGrantResponseItem) });
