import {
  type SequenceUserResponse,
  sequenceUserResponse,
} from "packages/models/src/sequenceUserResponse.generated.ts";
import {
  type PaginationResponse,
  paginationResponse,
} from "packages/models/src/paginationResponse.generated.ts";
import { z } from "zod";

export type ListSequenceUsersResponse = {
  items: Array<SequenceUserResponse>;
  pagination: PaginationResponse;
};

export const listSequenceUsersResponse = z.object({
  items: z.array(sequenceUserResponse),
  pagination: paginationResponse,
});
