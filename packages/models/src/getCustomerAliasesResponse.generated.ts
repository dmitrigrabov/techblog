import { type CustomerAlias, customerAlias } from "packages/models/src/customerAlias.generated.ts";
import { z } from "zod";

export type GetCustomerAliasesResponse = { items: Array<CustomerAlias> };

export const getCustomerAliasesResponse = z.object({ items: z.array(customerAlias) });
