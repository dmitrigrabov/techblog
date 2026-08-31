import {
  type SequenceAccount,
  sequenceAccount,
} from "packages/models/src/sequenceAccount.generated.ts";
import {
  type PaginationResponse,
  paginationResponse,
} from "packages/models/src/paginationResponse.generated.ts";
import { z } from "zod";

export type ListSequenceAccountsResponse = {
  items: Array<SequenceAccount>;
  pagination: PaginationResponse;
};

export const listSequenceAccountsResponse = z.object({
  items: z.array(sequenceAccount),
  pagination: paginationResponse,
});
