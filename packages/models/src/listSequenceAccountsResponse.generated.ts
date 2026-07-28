import {
  type SequenceAccount,
  sequenceAccount,
} from "packages/models/src/sequenceAccount.generated.ts";
import {
  type PaginationResponse1,
  paginationResponse1,
} from "packages/models/src/paginationResponse1.generated.ts";
import { z } from "zod";

export type ListSequenceAccountsResponse = {
  items: Array<SequenceAccount>;
  pagination: PaginationResponse1;
};

export const listSequenceAccountsResponse = z.object({
  items: z.array(sequenceAccount),
  pagination: paginationResponse1,
});
