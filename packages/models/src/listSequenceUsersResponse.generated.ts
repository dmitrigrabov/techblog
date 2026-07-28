import {
  type SequenceUserResponse,
  sequenceUserResponse,
} from "packages/models/src/sequenceUserResponse.generated.ts";
import {
  type PaginationResponse1,
  paginationResponse1,
} from "packages/models/src/paginationResponse1.generated.ts";
import { z } from "zod";

export type ListSequenceUsersResponse = {
  items: Array<SequenceUserResponse>;
  pagination: PaginationResponse1;
};

export const listSequenceUsersResponse = z.object({
  items: z.array(sequenceUserResponse),
  pagination: paginationResponse1,
});
